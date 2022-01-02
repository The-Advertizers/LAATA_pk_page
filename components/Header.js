import {AtSymbolIcon} from "@heroicons/react/outline";
import Link from "next/link";
import {basePath} from "../next.config";

export default function Header() {
    return (
        <div
            className={`duration-300 animate-slidedown border border-gray-200 w-full rounded-md bg-white z-10 shadow-lg mb-8`}
            data-class-in='translate-x-0 opacity-100'
            data-class-out='-translate-x-32 opacity-0'>
            <div
                className={`container sm:py-4 md:py-8 px-8 flex items-center justify-center sm:justify-between`}>
                <div className={'sm:hidden'}/>
                <div className={'flex-shrink-0'}>
                    <Link href={'/'}>
                        <img
                            className={`mx-8 my-8 sm:my-2 w-auto h-10 md:h-12 cursor-pointer`}
                            src={`${basePath}/logo.png`}
                            alt={'logo'}
                        />
                    </Link>
                </div>

                <div className={'flex items-center flex-shrink-1'}>
                    <a href="mailto:info@londonaestheticsandtrainingacademy.co.uk"
                       className="button">
                        <AtSymbolIcon className={'w-5 h-auto'}/>
                        <p className="hidden sm:block">Contact us</p>
                    </a>
                </div>
            </div>

            <div className={'bg-accent-lighter py-4 px-8 flex flex-wrap items-center justify-start space-x-8 '}>
                <Link href={'/qualifications'}>
                    <div className={'cursor-pointer text-secondary font-bold underline'}>Qualifications</div>
                </Link>

                <Link href={'/progression-faqs'}>
                    <div className={'cursor-pointer text-secondary font-bold underline'}>FAQ's</div>
                </Link>

                <Link href={'/university-progression'}>
                    <div className={'cursor-pointer text-secondary font-bold underline'}>University Progression</div>
                </Link>
            </div>
        </div>
    );
}
