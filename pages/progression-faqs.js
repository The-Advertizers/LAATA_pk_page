import Head from "next/head";
import Header from "../components/Header";
import Accordion from "../components/Accordion";

let accordions = [{
    "title": "What do the Diplomas offer me?",
    "body": "The Level 4 Certificate and the Level 5 Diploma provides learning at University level with successful students achieving 240 credits. This is the first 2 years of a Degree. Students can then progress to a final year \u2018Top Up\u2019 year to complete their degree."
}, {
    "title": "Is there an option for a Masters Degree?",
    "body": "The Qualifi Level 7 Diplomas offer up to 120 credits of a Masters programme. Students can progress to a dissertation only with some of our University partners to receive a Masters Degree."
}, {
    "title": "What is the cost of the Diplomas?",
    "body": "Costs vary depending on the delivery model and where you choose to study.  There is a significant reduction when compared to students who attend university full time for the same degrees and masters."
}, {
    "title": "How can I fund the Diploma?",
    "body": "There are a number of options available if the student is eligible:"
}, {
    "title": "What degrees or masters degrees do I qualify for on completion?",
    "body": "Successful students can progress to any of our named University partners at http://qualifi.net/university-pathways/"
}, {
    "title": "Am I guaranteed a place at University?",
    "body": "Yes. Students have the option to progress directly because the Diploma is credit recognised or one of our centres can facilitate and help with your transfer."
}, {
    "title": "Do I need to go to the named Universities?",
    "body": "No. Qualifi works with a number of Universities. Students can identify their preferred choice and Qualifi will facilitate where possible."
}, {
    "title": "Who are the trainers/lecturers?",
    "body": "The delivery team are experienced professionals from within Higher Education. Centre who deliver the qualifications must demonstrate they have the experience to support you."
}, {
    "title": "How do we contact the trainers/lecturers for support?",
    "body": "Students have access to the delivery team via telephone. email, in person or online. Qualifi continues to develop its delivery options for centres and an online learning platform will allow for a forum and open discussions between all students and the delivery team."
}, {
    "title": "What resources do we get?",
    "body": "All students receive workbooks and assessments that will allow them to successfully negotiate the subject matter. Any additional reading matter will be recommended if it needs to be purchased."
}, {
    "title": "What if I\u2019ve never been on a Further/Higher education course before?",
    "body": "Qualifi understands this. Our delivery and support team will guide you through the process. In addition to the Diploma subject matter we will provide guidance on how to write essays and study at this level of education."
}, {
    "title": "What are the entry requirements for the Diplomas?",
    "body": "Students are required to have the right level of qualifications or appropriate vocational experience. The specifications and handbooks will identify this. Qualifi also provides an access course that will also allow entry to the qualifications.."
}, {
    "title": "What happens if I start the course and find it to difficult?",
    "body": "Qualifi and the centres will work with you at your own pace. There are no time limits so you can work at your own pace. If you find elements difficult we will focus support for you."
}, {
    "title": "Can I withdraw from the course after I\u2019ve started?",
    "body": "Yes, you can. You will be given an exit certificate recognising your achievement with credit recognition. For example, if you complete one module and leave you will receive notification of your modules completed. If you achieve 120 credits of the 240 you will receive a Certificate. This is equivalent to one year at University."
}, {
    "title": "How long will it take me to complete?",
    "body": "The Diplomas are flexible. You can create your own learning timetable with the centre you register with and personal tutor."
}, {
    "title": "How many people have studied with Qualifi?",
    "body": "To date, we have provided learning to over 500,000 people worldwide."
}, {
    "title": "What\u2019s the pass rate?",
    "body": "The success rate is high because we dedicate time and resources to all our students. We allow for re submission of essays so we have over 95% of our students are successful."
}, {
    "title": "Can we speak/email some the students who have gone through the course?",
    "body": "Yes, you can. We are also working on an online forum that will facilitate this in the future."
}, {
    "title": "Is the course online?",
    "body": "Yes, as part of a blended learning model. Students do not have to attend all the lectures. Materials are available and essays can be submitted online."
}, {
    "title": "Are workbooks provided?",
    "body": "Yes. All workbooks are provided online so:"
}, {
    "title": "When I have a challenge/problem who do I speak with?",
    "body": "You have direct contact with your lecturer or you can speak to Qualifi support team."
}, {
    "title": "Is there a handbook available?",
    "body": "Yes. The handbook clearly identifies the full Diploma, modules, assessments and what\u2019s expected of you."
}, {
    "title": "How do I enrol?",
    "body": "You can enrol directly by emailing an approved centre or our dedicated support team UK support@qualiif-international.com"
}, {
    "title": "What happens when I enrol?",
    "body": "You will be sent a timetable, guidance and your first module."
}, {
    "title": "What if I have more questions?",
    "body": "If you require further information please do not hesitate to email us at support@qualifi-international.com"
}];

export default function ProgressionFAQs() {
    return (
        <>
            <Head>
                <title>Progression FAQs</title>
            </Head>

            <div className={'container section mx-auto sm:justify-between items-center'}>
                <Header/>
                <h1 className={'mb-4'}>FAQ’s for Qualifi Diplomas offering progression to University</h1>
                {accordions.map(Accordion)}
            </div>
        </>
    );
}