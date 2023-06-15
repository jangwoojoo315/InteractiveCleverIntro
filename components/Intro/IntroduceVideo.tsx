import styled from "@emotion/styled";
const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroduceVideo = () => {
  return (
    <VideoWrapper>
      <video autoPlay loop muted width={"100%"}>
        <source src="videos/clever-introduce.mp4" type="video/mp4" />
      </video>
    </VideoWrapper>
  );
};
export default IntroduceVideo;
