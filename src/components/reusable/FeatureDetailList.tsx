import React from 'react';
import Capacity from '../icons/capacity';

interface ListDashedProps {
  text: string;
  dashed?: any;
}

const ListDashed: React.FC<ListDashedProps> = ({ text, dashed }) => {
  return (
    <div className="text-[#c5c5c5]   text-xl font-normal font-titillium leading-9 flex   justify-start">
      {dashed ? (
        <span className="  mr-2"> - </span>
        
      ) : (
        <span className="w-1 h-1 mt-4 bg-[#c5c5c5] inline-block mr-2"></span>
      )}
      {text}
    </div>
  );
};

interface FeatureDetailListProps {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  heading: string;
  details: string[];
  dashed?: any;
}

const FeatureDetailList: React.FC<FeatureDetailListProps> = ({ icon: Icon, heading, dashed ,details }) => {
  return (
    <div>
      {Icon && <Icon />} {/* Ensure Icon is a React component */}
      <h4 className="pt-3 text-[#c3202a] text-[28px] font-semibold font-titillium leading-[46px]">
        {heading}
      </h4>
      <div className="py-4">
        {details.map((detail, index) => (
          <ListDashed key={index} text={detail}  dashed={dashed} />
        ))}
      </div>
    </div>
  );
};

export default FeatureDetailList;
