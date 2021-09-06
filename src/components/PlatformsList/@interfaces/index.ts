interface StaticImageData {
  src: string
  height: number
  width: number
  blurDataURL?: string
}

export interface IPlatformsListProps {
  isVisible: boolean;
  image?: StaticImageData;
  title?: string;
  height?: string;
  width?: string;
  noPlatform?: boolean;
}
