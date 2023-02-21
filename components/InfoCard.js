import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { data } from "../data";

function InfoCard({ i, k }) {
  return (
    <div className="flex py-7 pr-4 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        {data?.map(
          <Image
            key={k}
            src={i.img}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        )}
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          {data?.map(<p key={k}>{i.location}</p>)}

          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        {data?.map(
          <h4 key={k} className="text-xl">
            {i.title}
          </h4>
        )}

        <div className="border-b w-10 pt-2" />
        {data?.map(
          <p key={k} className="pt-2 text-sm text-gray-500 flex-grow">
            {i.description}
          </p>
        )}

        <div className="flex justify-between items-end pt-5">
          {data?.map(
            <p key={k} className="flex items-center">
              <StarIcon className="h-5 text-red-400" />
              {i.star}
            </p>
          )}

          <div>
            {data?.map(
              <p key={k} className="text-lg font-semibold lg:text-2xl pb-2">
                {i.price}
              </p>
            )}

            {data?.map(
              <p key={k} className="text-right font-extralight">
                {i.total}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
