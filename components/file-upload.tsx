import { FileIcon, X } from "lucide-react";
import Image from "next/image";
import { UploadDropzone } from "@/lib/uploadthing";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {

  const [fileType, fileUrl] = value.split("|");
  console.log(fileType)

  if (value) {
    const [fileType, fileUrl] = value.split("|");

    if (fileType.includes("image")) {
      return (
        <div className="relative h-20 w-20">
          <Image
            fill
            src={fileUrl}
            alt="Upload"
            className="rounded-full"
            onError={() => onChange("")}
          />
          <button
            onClick={() => onChange("")}
            className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      );
    }

    if (fileType === "application/pdf") {
      return (
        <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
          <FileIcon className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
          >
            PDF File
          </a>
          <button
            onClick={() => onChange("")}
            className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      );
    }
  }


  // Render UploadDropzone for file upload
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        const file = res?.[0];
        if (file?.url && file?.type) {
          onChange(`${file.type}|${file.url}`); // Combine type and URL
        } else {
          console.error("Upload missing data:", res);
        }
      }}
      onUploadError={(err: Error) => {
        console.error("Upload error:", err);
      }}
    />
  );

};