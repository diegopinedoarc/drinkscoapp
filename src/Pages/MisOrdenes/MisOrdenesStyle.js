import styled from "styled-components";
export const MisOrdenesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 30vw;

  gap: 1rem;
  flex-wrap: wrap;
`;

export const OrderCard = styled.div`
  display: flex;

  padding: 0.5rem;
  border-radius: 0.4rem;
  text-align: center;
  box-shadow: 2px 4px 8px 2px var(--negroheader);
`;

export const OrderInfoContainer = styled.div``;

export const OrderTitle = styled.h2``;

export const OrderId = styled.p``;

export const OrderPrice = styled.p``;

export const MisOrdenesContainer = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  margin-bottom: 10rem;
  width: 100%;
  height: 80vh;
  margin-top: 2rem;
`;

export const MisOrdenesTitle = styled.h2``;

export const MisOrdenesBtnContainer = styled.div`
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
