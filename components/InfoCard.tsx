import Image from "next/image";

import { HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { searchResualt } from "../interfaces/data";

type Props = {
    img: string,
    location: string,
    title: string, 
    description: string, 
    star: number, 
    price: string, 
    total: string
}

const InfoCard = ({ img, location, title, description, star, price, total }: Props) => {
    return ( 
        <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg
        pr-4 transition duration-200 ease-out first:border-t">

            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image src={img} fill alt="image-card" className="object-cover rounded-2xl" />
            </div>

            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p className="text-xs text-gray-400">{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>

                <h4 className="tex-xl">{title}</h4>
                <div className="border-b w-10 pt-2" />

                <p className="pt-2 text-sm text-gray-500">{description}</p>

                <div className="flex justify-between pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>

                    <div>
                        <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default InfoCard;