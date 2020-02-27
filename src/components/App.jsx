import React from 'react';
import Header from './Header';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
import HTTP404 from './HTTP404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import Admin from './Admin';
import AboutUs from './AboutUs';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {},
      selectedKeg: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateKegElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateKegElapsedWaitTime() {
    var newMasterKegList = Object.assign({}, this.state.masterKegList);
    Object.keys(newMasterKegList).forEach(kegId => {
      newMasterKegList[kegId].formattedWaitTime = (newMasterKegList[kegId].timeOpen).fromNow(true);
    });
    this.setState({masterKegList: newMasterKegList});
  }

  handleAddingNewKegToList(newKeg){
    var newKegId = v4()
    var newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    newMasterKegList[newKegId].formattedWaitTime = newMasterKegList[newKegId].timeOpen.fromNow(true);
    this.setState({masterKegList: newMasterKegList});
  }

  handleChangingSelectedKeg(kegId){
    this.setState({selectedKeg: kegId});
  }

  render(){
    console.log(this.state.masterKegList);
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route path='/admin' render={(props)=><Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname}
            onKegSelection={this.handleChangingSelectedKeg}
            selectedKeg={this.state.selectedKeg}/>} />
          <Route path='/aboutus' render={()=><AboutUs/>} />
          <Route component={HTTP404} />
        </Switch>
      </div>
    );
  }

}

export default App;
