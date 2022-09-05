import styled from "styled-components";
import { useState } from "react";

export const App = () => {
  const [senkouTokuron, setSenkouTokuron] = useState(0);
  const [senkouEnsyu, setSenkouEnsyu] = useState(0);
  const [kenkyuKyotu, setKenkyuKyotu] = useState(0);
  const [kokusai, setKokusai] = useState(0);
  const [kenkyuTokuron, setKenkyuTokuron] = useState(0);
  const [kenkyuEnsyu, setKenkyuEnsyu] = useState(0);
  const [sousei, setSousei] = useState(0);
  const [tokubetuKenkyu, setTokubetuKenkyu] = useState(0);

  return (
    <ComponentContainer>
      <TitleContainer>
        <Title>
          三重大学工学研究科情報工学専攻創成工学コース卒業出来るか診断
        </Title>
        <div>(あくまで参考程度にしてください)</div>
        <div>半角文字での入力をお願いします</div>
        <div>参考：令和3年度大学院履修要綱（博士前期課程）</div>
      </TitleContainer>

      <ContentsConatier>
        <ContentsItem>
          <div>専攻指定特論</div>
          <ItemContaier>
            <div>必要単位</div>
            <div>4単位</div>
          </ItemContaier>
          <ItemContaier>
            <div>取得単位</div>
            <input
              type="number"
              min="0"
              max="30"
              value={senkouTokuron}
              onChange={(e) => setSenkouTokuron(Number(e.target.value))}
            />
          </ItemContaier>
          <ItemContaier>
            <div>状態</div>
            {senkouTokuron >= 4 ? (
              <div>足りている</div>
            ) : (
              <RedText>足りていない</RedText>
            )}
          </ItemContaier>
        </ContentsItem>

        <ContentsItem>
          <div>専攻指定演習</div>
          <ItemContaier>
            <div>必要単位</div>
            <div>2単位</div>
          </ItemContaier>
          <ItemContaier>
            <div>取得単位</div>
            <input
              type="number"
              min="0"
              max="30"
              value={senkouEnsyu}
              onChange={(e) => setSenkouEnsyu(Number(e.target.value))}
            />
          </ItemContaier>
          <ItemContaier>
            <div>状態</div>
            {senkouEnsyu >= 2 ? (
              <div>足りている</div>
            ) : (
              <RedText>足りていない</RedText>
            )}
          </ItemContaier>
        </ContentsItem>

        <ContentsItem>
          <div>研究科共通</div>
          <ItemContaier>
            <div>必要単位</div>
            <div>1単位</div>
          </ItemContaier>
          <ItemContaier>
            <div>取得単位</div>
            <input
              type="number"
              min="0"
              max="30"
              value={kenkyuKyotu}
              onChange={(e) => setKenkyuKyotu(Number(e.target.value))}
            />
          </ItemContaier>
          <ItemContaier>
            <div>状態</div>
            {kenkyuKyotu >= 1 ? (
              <div>足りている</div>
            ) : (
              <RedText>足りていない</RedText>
            )}
          </ItemContaier>
        </ContentsItem>

        <ContentsItem>
          <div>国債教育科目</div>
          <ItemContaier>
            <div>必要単位</div>
            <div>2単位</div>
          </ItemContaier>
          <ItemContaier>
            <div>取得単位</div>
            <input
              type="number"
              min="0"
              max="30"
              value={kokusai}
              onChange={(e) => setKokusai(Number(e.target.value))}
            />
          </ItemContaier>
          <ItemContaier>
            <div>状態</div>
            {kokusai >= 2 ? (
              <div>足りている</div>
            ) : (
              <RedText>足りていない</RedText>
            )}
          </ItemContaier>
        </ContentsItem>

        <ContentsItem>
          <div>研究科領域教育科目特論</div>
          <ItemContaier>
            <div>必要単位</div>
            <div>2単位</div>
          </ItemContaier>
          <ItemContaier>
            <div>取得単位</div>
            <input
              type="number"
              min="0"
              max="30"
              value={kenkyuTokuron}
              onChange={(e) => setKenkyuTokuron(Number(e.target.value))}
            />
          </ItemContaier>
          <ItemContaier>
            <div>状態</div>
            {kenkyuTokuron >= 2 ? (
              <div>足りている</div>
            ) : (
              <RedText>足りていない</RedText>
            )}
          </ItemContaier>
        </ContentsItem>

        <ContentsItem>
          <div>研究科領域教育科目演習</div>
          <ItemContaier>
            <div>必要単位</div>
            <div>2単位</div>
          </ItemContaier>
          <ItemContaier>
            <div>取得単位</div>
            <input
              type="number"
              min="0"
              max="30"
              value={kenkyuEnsyu}
              onChange={(e) => setKenkyuEnsyu(Number(e.target.value))}
            />
          </ItemContaier>
          <ItemContaier>
            <div>状態</div>
            {kenkyuEnsyu >= 2 ? (
              <div>足りている</div>
            ) : (
              <RedText>足りていない</RedText>
            )}
          </ItemContaier>
        </ContentsItem>

        <ContentsItem>
          <div>創成工学教育科目</div>
          <ItemContaier>
            <div>必要単位</div>
            <div>5単位</div>
          </ItemContaier>
          <ItemContaier>
            <div>取得単位</div>
            <input
              type="number"
              min="0"
              max="30"
              value={sousei}
              onChange={(e) => setSousei(Number(e.target.value))}
            />
          </ItemContaier>
          <ItemContaier>
            <div>状態</div>
            {sousei >= 5 ? (
              <div>足りている</div>
            ) : (
              <RedText>足りていない</RedText>
            )}
          </ItemContaier>
        </ContentsItem>

        <ContentsItem>
          <div>特別研究</div>
          <ItemContaier>
            <div>必要単位</div>
            <div>8単位</div>
          </ItemContaier>
          <ItemContaier>
            <div>取得単位</div>
            <input
              type="number"
              min="0"
              max="30"
              value={tokubetuKenkyu}
              onChange={(e) => setTokubetuKenkyu(Number(e.target.value))}
            />
          </ItemContaier>
          <ItemContaier>
            <div>状態</div>
            {tokubetuKenkyu >= 8 ? (
              <div>足りている</div>
            ) : (
              <RedText>足りていない</RedText>
            )}
          </ItemContaier>
        </ContentsItem>

        <ContentsItem>
          <div>合計単位</div>
          <ItemContaier>
            <div>必要単位</div>
            <div>30単位</div>
          </ItemContaier>
          <ItemContaier>
            <div>取得単位</div>
            <div>
              {senkouTokuron +
                senkouEnsyu +
                kenkyuKyotu +
                kokusai +
                kenkyuTokuron +
                kenkyuEnsyu +
                sousei +
                tokubetuKenkyu}
              単位
            </div>
          </ItemContaier>
          <ItemContaier>
            <div>状態</div>
            {senkouTokuron +
              senkouEnsyu +
              kenkyuKyotu +
              kokusai +
              kenkyuTokuron +
              kenkyuEnsyu +
              sousei +
              tokubetuKenkyu >=
            30 ? (
              <div>足りている</div>
            ) : (
              <RedText>足りていない</RedText>
            )}
          </ItemContaier>
        </ContentsItem>
      </ContentsConatier>
    </ComponentContainer>
  );
};

const ComponentContainer = styled.div`
  text-align: center;
  margin: 10vh;
`;

const TitleContainer = styled.div`
  margin-bottom: 5vh;
`;

const Title = styled.div`
  font-weight: bold;
`;

const ContentsConatier = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

const ContentsItem = styled.div`
  border: solid;
`;

const ItemContaier = styled.div`
  display: flex;
  justify-content: center;
  gap: 2vw;
`;

const RedText = styled.div`
  color: red;
`;
