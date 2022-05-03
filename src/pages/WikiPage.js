import Wiki from '../components/Wiki';
import Layout from '../components/Layout';

function WikiPage() {
    return(
        <main>
            <Layout children={<Wiki />} />
        </main>
    );
}

export default WikiPage;