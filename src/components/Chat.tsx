import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import Image from "next/image";
import { AutoResizeTextArea } from "./AutoResizeTextarea";

export function Chat() {
  return (
    <div className="bg-chat flex flex-col items-center text-t-secondary">
      <PromochatorLogo />
      <ChatTextArea />
    </div>
  );
}

function ChatTextArea() {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <Label htmlFor="prompt">Pomóc ci wybrać promotora?</Label>
      <AutoResizeTextArea
        id="prompt"
        placeholder="Znajdź mi idealnego promotora :)"
        className="max-h-[300px] min-h-fit min-w-[400px] resize-none rounded-lg border-color-primary bg-chat-user"
      />
    </div>
  );
}

function PromochatorLogo() {
  return (
    <div className="flex flex-col items-center">
      <PromochatorIcon imageWidth={32} imageHeight={32} imageClassName="p-2" />
      <span>
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
    <div className="flex aspect-square justify-center rounded-full border-[1px] border-white">
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
