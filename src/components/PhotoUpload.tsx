import { useRef, useState } from "react";
import { Camera, X } from "lucide-react";
import { toast } from "sonner";

export const MAX_PHOTOS = 8;
const MAX_EDGE = 1600;
const MAX_ORIGINAL_BYTES = 6 * 1024 * 1024;

async function compress(file: File): Promise<File | null> {
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.82));
    if (!blob) throw new Error("encode failed");
    return new File([blob], file.name.replace(/\.\w+$/, "") + ".jpg", { type: "image/jpeg" });
  } catch {
    // Format the browser cannot decode (e.g. HEIC on Chrome): keep the original if small enough.
    return file.size <= MAX_ORIGINAL_BYTES ? file : null;
  }
}

interface Props {
  files: File[];
  onChange: (files: File[]) => void;
  disabled?: boolean;
  labels: { button: string; hint: string; remove: string; tooLarge: string; limit: string };
}

export default function PhotoUpload({ files, onChange, disabled, labels }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [previews, setPreviews] = useState<Map<File, string>>(new Map());

  const addFiles = async (picked: FileList | null) => {
    if (!picked?.length) return;
    setBusy(true);
    const room = MAX_PHOTOS - files.length;
    if (picked.length > room) toast.error(labels.limit);
    const next: File[] = [];
    const nextPreviews = new Map(previews);
    for (const original of Array.from(picked).slice(0, Math.max(room, 0))) {
      const result = await compress(original);
      if (!result) {
        toast.error(labels.tooLarge);
        continue;
      }
      next.push(result);
      nextPreviews.set(result, URL.createObjectURL(result));
    }
    setPreviews(nextPreviews);
    onChange([...files, ...next]);
    setBusy(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  const remove = (file: File) => {
    const url = previews.get(file);
    if (url) URL.revokeObjectURL(url);
    const nextPreviews = new Map(previews);
    nextPreviews.delete(file);
    setPreviews(nextPreviews);
    onChange(files.filter((item) => item !== file));
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
        multiple
        className="sr-only"
        id="photo-upload"
        disabled={disabled || busy || files.length >= MAX_PHOTOS}
        onChange={(event) => addFiles(event.target.files)}
      />
      <label
        htmlFor="photo-upload"
        className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-dashed border-input bg-background text-foreground cursor-pointer hover:border-primary hover:bg-warm-surface transition focus-within:ring-2 focus-within:ring-primary ${
          disabled || busy || files.length >= MAX_PHOTOS ? "opacity-60 pointer-events-none" : ""
        }`}
      >
        <Camera size={18} className="text-primary" />
        <span className="text-sm font-medium">{labels.button}</span>
        <span className="text-xs text-muted-foreground">
          ({files.length}/{MAX_PHOTOS})
        </span>
      </label>
      <p className="text-xs text-muted-foreground mt-2">{labels.hint}</p>

      {files.length > 0 && (
        <ul className="mt-3 grid grid-cols-4 gap-2 list-none p-0">
          {files.map((file) => (
            <li key={previews.get(file) ?? file.name + file.size} className="relative aspect-square">
              <img
                src={previews.get(file)}
                alt={file.name}
                className="w-full h-full object-cover rounded-lg border border-border"
                onError={(event) => (event.currentTarget.style.visibility = "hidden")}
              />
              <button
                type="button"
                onClick={() => remove(file)}
                disabled={disabled}
                aria-label={`${labels.remove}: ${file.name}`}
                className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <X size={14} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
