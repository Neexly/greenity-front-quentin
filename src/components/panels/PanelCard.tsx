"use client";

import { Panel } from "@prisma/client";
import { useRouter } from "next/navigation";

interface PanelCardProps {
  data: Panel;
}

const PanelCard: React.FC<PanelCardProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="group relative">
        <div className="min-h-80 aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
          <img
            src={data.imageSrc}
            alt="Panel picture"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {data.title}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Prix moyen par minute</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{data.price}</p>
        </div>
      </div>
    </>
  );
};

export default PanelCard;
