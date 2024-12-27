import Image from "next/image";

import { PromptForm } from "./prompt-form";

export function Chat() {
  return (
    <div className="flex w-full flex-col items-center gap-y-8 align-middle text-t-secondary">
      <PromochatorLogo />
      <div className="flex w-full flex-col items-center gap-y-3">
        <p className="text-lg">Pomóc wybrać Ci promotora?</p>
        <PromptForm />
      </div>
    </div>
  );
}

function PromochatorLogo() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <PromochatorIcon
        imageWidth={64}
        imageHeight={64}
        imageClassName="py-2 px-1"
      />
      <span className="text-3xl">
        Promo<span className="font-bold text-color-primary">CHAT</span>or
      </span>
    </div>
  );
}

export function PromochatorIcon({
  imageWidth,
  imageHeight,
  imageClassName,
}: {
  imageWidth: number;
  imageHeight: number;
  imageClassName?: string;
}) {
  return (
    <div
      className={`flex aspect-square justify-center rounded-full border-2 border-white`}
      style={{
        width: `${imageWidth.toString()}px`,
        height: `${imageHeight.toString()}px`,
      }}
    >
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
