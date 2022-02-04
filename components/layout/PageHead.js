import Head from "next/head";
function PageHead({ headTitle }) {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Adyl - NFT Marketplace App"}
                </title>
                <link rel="icon" href="/logo.webp" />
            </Head>
        </>
    );
}
export default PageHead;
