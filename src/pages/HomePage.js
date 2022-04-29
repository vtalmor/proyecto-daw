import Home from '../components/Home';
import Layout from '../components/Layout';

function HomePage() {
    return(
        <main>
            <Layout children={<Home />} />
        </main>
    );
}

export default HomePage;