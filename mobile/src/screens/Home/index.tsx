import { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Background } from "../../components/Background";

export function Home() {
  const navigation = useNavigation();

  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch("http://192.168.18.28:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  function handleOpenGame({ id, title, banner }: GameCardProps) {
    navigation.navigate("game", { id, title, banner });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title={"Encontre seu duo!"}
          subtitle={"Selecione o game que deseja jogar..."}
        />
        <FlatList
          data={games}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
