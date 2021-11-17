import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function StructureCard(data, i) {
    return (
        <div key={i} className="duration-300 bg-white mt-8 sm:m-8 shadow-xl rounded-lg p-6 border border-gray-200"
             data-class-in="translate-x-0 opacity-100"
             data-class-out="odd:-translate-x-32 translate-x-32 opacity-0">
            <div className="flex flex-col sm:flex-row items-center sm:space-x-6 mb-4">
                <div className="bg-accent-lighter p-4 rounded-lg">
                    <FontAwesomeIcon className="flex-shrink-0 w-6 h-auto text-secondary" icon={data.icon}/>
                </div>
                <h2 className="pt-4 sm:pt-0 text-secondary text-center sm:text-left font-bold">{data.title}</h2>
            </div>
            <div className="border-t pt-4 sm:p-4 pb-0">
                <p className="leading-loose font-normal sm:text-base">
                    {data.body}
                </p>
            </div>
        </div>
    );
}
