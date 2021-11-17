import {ChevronDownIcon} from "@heroicons/react/solid";

export default function Accordion(data, i) {
    return (
        <div key={i} className="group outline-none accordion-section" tabIndex={i}>
            <div
                className="group bg-accent-lighter flex justify-between px-4 py-3 items-center text-secondary
                transition ease duration-500 cursor-pointer pr-10 relative">
                <p className="sm:text-lg font-semibold transition ease duration-500">
                    {data.title}
                </p>
                <div
                    className="h-6 w-6 sm:h-8 sm:w-8 border border-accent rounded-full items-center
                    inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180
                    absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                    <ChevronDownIcon/>
                </div>
            </div>
            <div
                className="group-focus:max-h-screen max-h-0 group-focus:border-t
                group-focus:border-b border-accent-dark bg-accent-lighter px-4 overflow-hidden ease duration-500">
                <p className="p-2 text-accent-dark text-xs sm:text-sm">
                    {data.body}
                </p>
            </div>
        </div>
    );
}