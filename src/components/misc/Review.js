import React from 'react';
import tw from 'twin.macro';

const MainReview = tw.div`justify-start w-2/3`;
const ContainerTitle = tw.div`flex flex-row gap-2`;
const MainTitle = tw.h2`text-3xl font-bold`;
const Subtitle = tw.p`text-3xl font-bold`;
const Container = tw.div`my-4 flex items-center`;
const Image = tw.img`w-16 h-16 object-cover rounded-full mr-4`;
const TextContainer = tw.div`flex flex-col`;
const Name = tw.p`text-base font-bold`;
const Date = tw.p`text-sm text-gray-500`;
const NameText = tw.p`text-base text-gray-500`;
const ContTextName = tw.div`flex flex-row gap-1`;
const Information = tw.p`text-base text-gray-700`;
const ParaTitle = tw.h3`text-lg font-bold my-3`;
const Paragraph = tw.p`text-base text-gray-700 mb-4`;
const ContProsCont = tw.div`flex flex-col w-full`;
const MainContProsCont = tw.div`flex flex-row gap-6 mb-4`;
const ListContainer = tw.ul`list-disc pl-4`;

const Review = ({ vehicleName, vehicleYear, reviewerName, reviewDate, reviewerImage, InfoVehicle,  additionalText, ProsConsNewData  }) => {
    return (
        <MainReview>
    <ContainerTitle>
      <MainTitle>Review de {vehicleName}</MainTitle>
      <Subtitle>{vehicleYear}</Subtitle>
    </ContainerTitle>
        <Container>
        <Image src={reviewerImage} alt="Reviewer Image" />
        <TextContainer>
        <ContTextName>
        <NameText>Por</NameText>
          <Name>{reviewerName}</Name>
          </ContTextName>
          <Date>Actualizado {reviewDate}</Date>
        </TextContainer>
      </Container>
      <Information>{InfoVehicle}</Information>
      <MainContProsCont>
          {ProsConsNewData.map((data, index) => (
            <ContProsCont key={index}>
              <ParaTitle>{data.title}</ParaTitle>
              <ListContainer>
                {data.content.split('\n').map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ListContainer>
            </ContProsCont>
          ))}
        </MainContProsCont>
      {additionalText && additionalText.map((text, index) => (
          <React.Fragment key={index}>
            <ParaTitle>{text.title}</ParaTitle>
            <Paragraph>{text.paragraph}</Paragraph>
          </React.Fragment>
        ))}
      </MainReview>
  );
};

export default Review;