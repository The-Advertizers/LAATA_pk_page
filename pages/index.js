import Head from 'next/head'

import Particles from "react-tsparticles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";

import {Transition} from "@headlessui/react";
import {Dialog} from "@headlessui/react";
import {Fragment, useRef, useState} from "react";
import {ChevronDoubleDownIcon, ChevronDoubleRightIcon, ChevronDownIcon} from "@heroicons/react/solid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faUserMd,
    faDesktop,
    faBookOpen,
    faHandSparkles,
    faPencilAlt,
} from '@fortawesome/free-solid-svg-icons'
import StructureCard from "../components/StructureCard";
import BookAppointmentDialog from "../components/BookAppointmentDialog";


const youtubeEmbedUrl = "https://www.youtube.com/embed/wxlNOnQ2jVg";

const faqData = [
    {
        "title": "What shall I bring with me?",
        "body": "Absolutely nothing! Well, almost nothing.\n" +
            "We have everything you need for the time you are with us but do ask that you come with a winning smile, " +
            "appetite to learn, patience and passion."
    },
    {
        "title": "Is the VTCT Level 7 Injectables course right for me?",
        "body": "If you are thinking about starting a career in beauty and aesthetic trainings or to work as an " +
            "entrepreneur. A level 7 training course is usually the right choice for you! This is a beginner to " +
            "intermediate course, covering all the main topics regarding fillers and other types of injectables and " +
            "its technical fundamentals i.e., everything you need to know about."
    },
    {
        "title": "What is VTCT?",
        "body": "Vocational Training Charitable Trust (VTCT) is a specialist awarding and assessment organisation " +
            "offering vocational and technical qualifications across a variety of service sectors."
    },
    {
        "title": "Will I gain practical experience during the Level 7 Injectables course?",
        "body": "Yes! At London Aesthetics, due to our Hands-on training programme. You will develop useful skills " +
            "to help you consult with clients. All our students work on models, enabling an in-depth understanding " +
            "of the respective treatments."
    },
    {
        "title": "Why choose London Aesthetics for this course?",
        "body": "We offer various modern facilities to support you as you study your Level 7 Diploma in Injectables. " +
            "Our range of injectables courses is designed to suit every individual, providing the tips, tools and " +
            "skills required to meet the challenges of an ever-changing, highly competitive job market – " +
            "never more important than right now! \n" +
            "Choosing us is the right choice because other than the tech and tools required, we offer a professional" +
            " environment with a focus on positive attitude for the students!"
    },
    {
        "title": "How experienced are the teachers for this course?",
        "body": "Our teachers here at London Aesthetics are highly qualified professionals who have worked in their " +
            "respective fields for years in the industry. Our team of qualified trainers will ensure you benefit from" +
            " the best-accredited courses the nail industry has to offer.\n" +
            " All students taking our courses are guaranteed to be trained by passionate, experienced and focused nail" +
            " technicians, ready and waiting to pass on their own experiences."
    },
];

const structureData = [
    {
        "icon": faUserMd,
        "title": "FOUNDATION AESTHETIC TRAINING COURSE",
        "body": "Our one-day Foundation Aesthetic Training Course is your starting guide for a career in " +
            "medical aesthetics helping you decide if you want to choose this as your path",
    },
    {
        "icon": faDesktop,
        "title": "ON-SITE TRAINING MODULES",
        "body": "We believe in first hand and face to face learning. The tools and delegates for training will be " +
            "provided with thorough and in-depth knowledge of aesthetics; ranging from understanding your patient, " +
            "consulting them for their best and complications regarding the historical context of medical aesthetics.",
    },
    {
        "icon": faPencilAlt,
        "title": "QNA and ASSIGNMENTS",
        "body": "This part of the course involves short answer questions consisting of an assignment paper of " +
            "knowledge gained through your knowledge practice you acquired here. The research and modules that" +
            " you study here will also get asked about.",
    },
    {
        "icon": faBookOpen,
        "title": "LECTURES AND OBSERVATIONS",
        "body": "You will observe anti-wrinkle and dermal filler practice separately administered by our highly" +
            " experienced and qualified practitioners that have been working in the respected fields for decades.",
    },
    {
        "icon": faHandSparkles,
        "title": "HANDS-ON TRAINING PROGRAM",
        "body": "The program that makes us stand apart from other training academies is our hands on training " +
            "module. You will administer anti-wrinkle injections and Dermal Filler treatments on models under the" +
            " supervision of our expert trainers to show what you learned in the process.",
    },
];

const whyChooseData = [
    "Top leading level 7 diploma from VTCT",
    "Hands-on training program",
    "100% pass rate",
    "Consultation and pitching skills",
    "Live models for practice",
    "Our accredited courses are developed in line and according to CPD standards",
    "We are an CPD and UK approved training centre",
    "We’ve trained over thousands of medical professionals/ clinicians in aesthetic treatments",
    "Courses are taught by chosen team of highly professional doctors, nurses and medical practitioners",
    "Courses being held in fully functioning clinic environments across many locations internationally"
];

export default function Home() {
    let [isOpenModal, setIsOpenModal] = useState(true)

    function closeModal() {
        setIsOpenModal(false)
    }

    function openModal() {
        setIsOpenModal(true)
    }

    const details = useRef(null);

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
                <Head>
                    <title>Level 7 Diploma in injectables for clinical aesthetic treatments</title>
                    <link rel="icon" href={"/favicon.png"}/>
                </Head>

                <Particles className="absolute -z-10 w-device h-device" url={'/particlesjs-config.json'}/>
                <div className="container section-screen mx-auto justify-between sm:items-center">
                    <Header/>
                    <div>
                        <h1>
                            LEVEL 7 DIPLOMA IN INJECTABLES FOR MEDICAL AESTHETIC TREATMENTS
                        </h1>
                        <p className="text-gray-600 mb-4">Are you wishing to build a career around in the near
                            future?</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-16">
                            <div className="animate-slideright_fadein flex flex-col text-justify"
                            >
                                <div
                                    className="duration-300"
                                    data-class-in="translate-x-0 opacity-100"
                                    data-class-out="-translate-x-32 opacity-0">
                                    <p className="text-sm sm:text-xl text-accent-dark my-8">VTCT regulates the Level 7
                                        Diploma
                                        in
                                        injectables.
                                        This
                                        qualification is available for doctors, dentists, nurses and medical trainees
                                        who
                                        hold a
                                        certain medical education and are willing to improve in medical aesthetics.
                                    </p>
                                    <p className="mb-4">You will get all the information you need about anti-wrinkle and
                                        face
                                        contouring. With the
                                        training you will also get the skills to perform the respected tasks with
                                        hyaluronic
                                        acid
                                        fillers and other aesthetic treatments, safely and efficiently.</p>
                                    <p>The diploma will be delivered with proficiency to allow for thorough
                                        understanding
                                        and
                                        qualification.</p>
                                </div>
                                <div
                                    onClick={openModal}
                                    className="fixed bottom-0 right-0 mx-8 z-10 button my-8 self-center lg:self-start sm:relative sm:mx-0">
                                    <p>Book Now</p>
                                    <ChevronDoubleRightIcon className="animate-pulse w-4 h-auto"/>
                                </div>
                            </div>
                            <div className="animate-slideleft_fadein duration-300 aspect-w-16 aspect-h-9 xl:mFx-8"
                                 data-class-in="translate-x-0 opacity-100"
                                 data-class-out="translate-x-32 opacity-0"
                            >
                                <iframe src={youtubeEmbedUrl}
                                        className="w-full rounded-xl"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>
                        </div>
                    </div>
                    <div className="hidden mt-16 cursor-pointer lg:flex flex-col items-center justify-center"
                         onClick={() => {
                             details.current.scrollIntoView()
                         }}>
                        <p className="mb-4 text-xs font-bold text-accent-dark">Scroll for more information</p>
                        <ChevronDoubleDownIcon className="w-12 animate-bounce h-auto text-secondary"/>
                    </div>
                </div>

                <div ref={details}
                     className="container mx-auto section section-screen items-center justify-center">
                    <h1 className="mb-4">STRUCTURE OF THE LEVEL 7 DIPLOMA IN INJECTABLES FOR MEDICAL AESTHETIC
                        TREATMENTS</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                        {structureData.map((data, i) =>
                            StructureCard(data, i)
                        )}
                    </div>
                </div>

                <div className="container mx-auto section">
                    <h1 className="mb-4">WHY CHOOSE LONDON AESTHETICS FOR YOUR LEVEL 7 DIPLOMA IN INJECTABLES?</h1>
                    <div className="duration-300"
                         data-class-in="translate-x-0 opacity-100"
                         data-class-out="translate-x-32 opacity-0">
                        <ul className="list-disc pl-8">
                            {whyChooseData.map((why, i) =>
                                <li key={i}>{why}</li>
                            )}
                        </ul>
                    </div>

                    <div className="mt-4 duration-300"
                         data-class-in="translate-x-0 opacity-100"
                         data-class-out="translate-x-32 opacity-0">
                        <h2 className="mb-2">Home Assessment and Gained Qualifications</h2>
                        <p>The completion of a portfolio is needed to be handed in within the completion of the course
                            for
                            the assessment.
                            <br/>With completion of the course, you will receive the following certificate:</p>
                        <ul className="list-disc pl-8 pt-4">
                            <li>VTCT Level 7 Diploma in Injectables</li>
                            <li>London Aesthetics academy certificate</li>
                        </ul>
                    </div>
                </div>

                <div className="container mx-auto section overflow-hidden">
                    <h1 className="mb-4">FREQUENTLY ASKED QUESTIONS</h1>
                    <div className='duration-300 sm:m-8 rounded overflow-hidden'
                         data-class-in="translate-x-0 opacity-100"
                         data-class-out="-translate-x-32 opacity-0">
                        {
                            faqData.map((faq, i) => {
                                return Accordion(faq, i);
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer/>
            <BookAppointmentDialog
                isOpen={isOpenModal}
                closeModal={closeModal}
                appointmentTitle={"Level 7 diploma in injectables for medical aesthetic treatment"}
            />
        </>
    )
}
