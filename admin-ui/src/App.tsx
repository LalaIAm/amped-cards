import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ProfileList } from "./profile/ProfileList";
import { ProfileCreate } from "./profile/ProfileCreate";
import { ProfileEdit } from "./profile/ProfileEdit";
import { ProfileShow } from "./profile/ProfileShow";
import { GameList } from "./game/GameList";
import { GameCreate } from "./game/GameCreate";
import { GameEdit } from "./game/GameEdit";
import { GameShow } from "./game/GameShow";
import { DeckList } from "./deck/DeckList";
import { DeckCreate } from "./deck/DeckCreate";
import { DeckEdit } from "./deck/DeckEdit";
import { DeckShow } from "./deck/DeckShow";
import { BlackCardList } from "./blackCard/BlackCardList";
import { BlackCardCreate } from "./blackCard/BlackCardCreate";
import { BlackCardEdit } from "./blackCard/BlackCardEdit";
import { BlackCardShow } from "./blackCard/BlackCardShow";
import { WhiteCardList } from "./whiteCard/WhiteCardList";
import { WhiteCardCreate } from "./whiteCard/WhiteCardCreate";
import { WhiteCardEdit } from "./whiteCard/WhiteCardEdit";
import { WhiteCardShow } from "./whiteCard/WhiteCardShow";
import { PlayerList } from "./player/PlayerList";
import { PlayerCreate } from "./player/PlayerCreate";
import { PlayerEdit } from "./player/PlayerEdit";
import { PlayerShow } from "./player/PlayerShow";
import { RoundList } from "./round/RoundList";
import { RoundCreate } from "./round/RoundCreate";
import { RoundEdit } from "./round/RoundEdit";
import { RoundShow } from "./round/RoundShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Despicable Cards"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Profile"
          list={ProfileList}
          edit={ProfileEdit}
          create={ProfileCreate}
          show={ProfileShow}
        />
        <Resource
          name="Game"
          list={GameList}
          edit={GameEdit}
          create={GameCreate}
          show={GameShow}
        />
        <Resource
          name="Deck"
          list={DeckList}
          edit={DeckEdit}
          create={DeckCreate}
          show={DeckShow}
        />
        <Resource
          name="BlackCard"
          list={BlackCardList}
          edit={BlackCardEdit}
          create={BlackCardCreate}
          show={BlackCardShow}
        />
        <Resource
          name="WhiteCard"
          list={WhiteCardList}
          edit={WhiteCardEdit}
          create={WhiteCardCreate}
          show={WhiteCardShow}
        />
        <Resource
          name="Player"
          list={PlayerList}
          edit={PlayerEdit}
          create={PlayerCreate}
          show={PlayerShow}
        />
        <Resource
          name="Round"
          list={RoundList}
          edit={RoundEdit}
          create={RoundCreate}
          show={RoundShow}
        />
      </Admin>
    </div>
  );
};

export default App;
