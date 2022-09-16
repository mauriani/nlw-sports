import { ImageSourcePropType } from "react-native";

export interface GameParams {
  id: string;
  title: string;
  banner: string | undefined;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: GameParams;
    }
  }
}
