import Head from "next/head";
import Header from "../components/Header";
import {basePath} from "../next.config";

const table = [
    {
        qualification: 'Holders of Level 2 and 3 qualifications',
        placement: 'Entry to the first year of degree qualifications'
    },
    {
        qualification: 'Holders of Level 4 qualifications',
        placement: 'Entry on to the second year of a British honours’ degrees in the respective field'
    },
    {
        qualification: 'Holders of Level 5 qualifications',
        placement: 'Final year (top up) at various universities in the UK'
    },
    {
        qualification: 'Holders of Level 6 qualifications',
        placement: 'Entry to master’s degrees or postgraduate diplomas'
    },
    {
        qualification: 'Holders of Level 7 qualifications',
        placement: 'Entry to the final stage of Masters qualifications, such as MBAs and MSc degrees.'
    },
    {
        qualification: 'Holders of Level 8 qualifications',
        placement: 'Preferential entry to a variety of Doctoral qualifications, including DBAs and PhDs'
    },
]

export default function () {
    return (
        <>
            <Head>
                <title>University Progression</title>
            </Head>

            <div className={'container section mx-auto sm:justify-between items-center'}>
                <Header/>

                <h1 className={'mb-8'}>Further studies after your Qualifi Qualification:</h1>
                <div className={'space-y-4'}>
                    <p>As a leading awarding organisation in our sectors, Qualifi works in close partnership various
                        universities to facilitate progression opportunities for our graduates.</p>

                    <p>All our regulated qualifications are recognised internationally, and we follow the guidelines and
                        conditions set out by our regulator, OfQual.</p>

                    <p>Here are some examples of our progression opportunities, and if you would like to receive further
                        details, please contact at University Placements at a.dominique@qualifi.net.</p>
                </div>

                <div className={'flex items-center justify-center my-8'}>
                    <table className="table-auto border-collapse border border-secondary bg-white">
                        <thead className={'bg-accent-lighter text-secondary'}>
                        <tr>
                            <th><h2>Qualification</h2></th>
                            <th><h2>Placement Level</h2></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            table.map((entry, i) => (
                                <tr key={i}>
                                    <td className={'border border-secondary p-4'}>{entry.qualification}</td>
                                    <td className={'border border-secondary p-4'}>{entry.placement}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>

                <div className={'space-y-8 flex flex-col'}>
                    <h1>QUALIFI Example Progression Routes:</h1>
                    <p>Qualifi offer a number of progression routes from our regulated qualifications directly into
                        University. Below are examples that can save the learner significant time and costs.</p>
                    <p>We continue to extend our range of qualifications so for more options and further information
                        please contact us.</p>
                    <img className={'max-w-2xl self-center'} src={`${basePath}/qualifi_example.png`}
                         alt={'Qualifi Example'}/>
                </div>
            </div>
        </>
    );
}