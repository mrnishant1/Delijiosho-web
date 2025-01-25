"use client"
import styled from 'styled-components';

const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  
  min-height: 100vh;
  padding: 80px 20px;
  
`;

const Title = styled.h1`
  color: #d35400;
  font-size: 48px;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
background: linear-gradient(135deg, #ffecd2 100%, #fcb69f 100%);
  padding: 10px;
  z-index: 2;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

const ProductCard = styled.div`
  background: #fff8e1;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%; /* 4:3 Aspect Ratio */
`;

const ProductImage = styled.img`
  position: absolute;
  top: 7%;
  left: 25%;
  width: 50%;
  height: 100%;
  shadox: 2px black;
  // object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProductName = styled.h2`
  font-size: 22px;
  margin: 10px 0;
  color: #e74c3c;
  font-family: 'Poppins', sans-serif;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  color: #c0392b;
  font-weight: bold;
`;

const ProductButton = styled.button`
  margin-top: 15px;
  padding: 12px 25px;
  background: #e67e22;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  transition: background 0.3s ease;

  &:hover {
    background: #d35400;
  }
`;

const products = [
  { id: 2, name: 'Gluten-Free Bread', price: '$19.99', image: '/macaronipack.png' },
  { id: 2, name: 'Gluten-Free Bread', price: '$19.99', image: '/macaronipack.png' },
  { id: 2, name: 'Gluten-Free Bread', price: '$19.99', image: '/macaronipack.png' },

];

export default function xyz(){
  return (
    <div >
      <ProductPageContainer >
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <ProductImageWrapper>
              <ProductImage src={product.image} alt={product.name} />
            </ProductImageWrapper>
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductButton onClick={()=>{alert("Cart and Buy option are in process of development")}}>Buy Now</ProductButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductPageContainer>
    </div>
  );
};
