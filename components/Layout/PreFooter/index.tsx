import React from 'react';
import { Type as PreFooterType } from '../../../payload/globals/PreFooter';
import Media from '../../Media';

type Props = {
    prefooter: PreFooterType
}

const PreFooter = (props: Props) => {
  const { prefooter } = props;
  console.log(prefooter.footerImage);
  return (
    <div className="bg-[#F3F7F7] shadow-[0_0_40px_rgba(25,29,49,0.2)] rounded-2xl py-12 px-20 mb-12">
      <div>
        <h2>
          {prefooter.heading.heading}
        </h2>
        <p className="text-grey-300">
          {prefooter.heading.subheading}
        </p>
      </div>
      <div>
        <Media {...prefooter.footerImage[0]} />
      </div>
    </div>
  );
};

export default PreFooter;
