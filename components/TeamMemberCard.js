import {basePath} from "../next.config";

export default function ({name, designation, details, image, prominent_details}) {
    return (
        <div
            className="group duration-300 w-full bg-white border rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
            data-class-in="translate-x-0 opacity-100"
            data-class-out="odd:-translate-x-32 translate-x-32 opacity-0">
            <div className="w-full md:w-2/5 h-80 bg-accent-lighter">
                <img className="mix-blend-normal lg:mix-blend-multiply filter group-hover:mix-blend-normal
                    lg:grayscale lg:group-hover:grayscale-0 lg:brightness-125 lg:group-hover:brightness-100
                    object-center object-cover w-full h-full duration-300"
                     src={`${basePath}/${image}`}
                     alt="photo"/>
            </div>
            <div className="w-full md:w-3/5 text-left p-6 md:p-4">
                <p className="text-xl text-secondary font-bold -mb-1">{name}</p>
                <p className="text-sm text-secondary opacity-70">{designation}</p>
                <div className="mt-2 space-y-1">
                    {prominent_details && prominent_details.map((detail, i) =>
                        <p key={i} className="text-base font-bold text-gray-500">{detail}</p>
                    )}
                    {details.map((detail, i) =>
                        <p key={i} className="text-base text-gray-500 font-normal">{detail}</p>
                    )}
                </div>
            </div>
        </div>
    );
}