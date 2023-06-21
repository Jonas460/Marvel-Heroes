import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const HeroCard = styled.div`
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f2f2f2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const HeroName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const HeroDescription = styled.p`
  font-size: 14px;
  color: #666666;
`;
