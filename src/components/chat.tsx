import Image from "next/image";

import { AutoResizeTextArea } from "./auto-resize-text-area";
import { Label } from "./ui/label";

export function Chat() {
  return (
    <div className="flex w-full flex-col items-center gap-y-8 align-middle text-t-secondary">
      <PromochatorLogo />
      <ChatTextArea />
    </div>
  );
}

//TODO migrate to ProseMirror lib
function ChatTextArea() {
  return (
    <div className="flex w-full flex-col items-center gap-y-3">
      <Label htmlFor="prompt" className="font-normal">
        Pomóc ci wybrać promotora?
      </Label>
      <AutoResizeTextArea
        id="prompt"
        placeholder="Znajdź mi idealnego promotora :)"
        className="min-h-fit resize-none overflow-hidden rounded-xl border-color-primary bg-chat-user"
      />
    </div>
  );
}

function PromochatorLogo() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <PromochatorIcon
        imageWidth={36}
        imageHeight={36}
        imageClassName="py-2 px-1"
      />
      <span className="text-3xl">
        Promo<span className="font-bold text-color-primary">CHAT</span>or
      </span>
    </div>
  );
}

function PromochatorIcon({
  imageWidth,
  imageHeight,
  imageClassName,
}: {
  imageWidth: number;
  imageHeight: number;
  imageClassName?: string;
}) {
  return (
    <div className="flex aspect-square justify-center rounded-full border-2 border-white">
      <Image
        src="/assets/logo/promochator-icon.svg"
        alt="logo Promochatora"
        width={imageWidth}
        height={imageHeight}
        className={imageClassName}
      />
    </div>
  );
}