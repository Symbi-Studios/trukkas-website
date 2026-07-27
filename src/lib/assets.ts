import type { StaticImageData } from 'next/image'

export type ImageAsset = StaticImageData | string

export function imageSrc(image: ImageAsset) {
  return typeof image === 'string' ? image : image.src
}
