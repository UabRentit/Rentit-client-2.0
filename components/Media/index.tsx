import React from 'react';
import { MediaType, Size } from '../../payload/collections/Media';

type Props = MediaType & {
    className?: string
    preferredSize?: Size
}

const Media: React.FC<Props> = ({
  className,
  filename,
  alt,
  preferredSize,
  sizes,
}) => {
  console.log(filename);
  return (
    <div className={className}>
      <img
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${sizes?.[preferredSize]?.filename || filename}`}
        alt={alt}
      />
    </div>
  );
};

export default Media;
