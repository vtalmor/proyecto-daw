import Help from '../components/Help';
import Layout from '../components/Layout';

function HelpPage() {
    return(
        <main>
            <Layout children={<Help />} />
        </main>
    );
}

export default HelpPage;