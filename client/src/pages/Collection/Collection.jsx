import { Breadcrumb, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const CATEGORIES = {
  'adults-t-shirt': 'Adults t-shirt',
  'kids-t-shirt': 'Kids t-shirt',
  'home-goods': 'Home goods',
  'cases-&-stickers': 'Cases & Category',
};

const Collection = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate('/')}>Home</Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => navigate('/collection')}>Collection</Breadcrumb.Item>
        <Breadcrumb.Item active>{CATEGORIES[category]}</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
};

export default Collection;
