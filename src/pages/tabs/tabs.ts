import { Component }    from '@angular/core';

import { HomePage }     from '../home/home';
import { ExplorerPage } from "../explorer/explorer";
import { ChatPage }     from "../chat/chat";
import { ProfilePage }  from "../profile/profile";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExplorerPage;
  tab3Root = ChatPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
