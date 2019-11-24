import React from 'react';
import { MyData } from '../../types/MyData';
import { AppState } from '../../store/configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../types/actions';
import { bindActionCreators } from 'redux';
import { startEditMyData, startRemoveMyData, startSetMyData } from '../../actions/myDatas';
import { connect } from 'react-redux';

interface MainPageProps {
  id?: string;
  color?: string;
}

type Props = MainPageProps & LinkStateProps & LinkDispatchProps;
interface MainPageState {}


export class MainPage extends React.Component<Props, MainPageState> {
  private onEdit = (myData: MyData) => {
    this.props.startEditMyData(myData);
  };

  private onRemove = (id: string) => {
    this.props.startRemoveMyData(id);
  }
  
  private onLoad = (myDatas: MyData[]) => {
    this.props.startSetMyData(myDatas);
  }
  public constructor(props: Props) {
    super(props);
    this.onLoad([
      {id: "dfkjfksdjkls", amount: 1, note: "test", description: "tests", createdAt: 2020}
    ])
  }

  public render(): JSX.Element {
    const { myDatas } = this.props;

    return (
      <div>
        {myDatas.map((myData, idx) => (
          <div key={idx}>
            <p>{myData.description}</p>
            <p>{myData.amount}</p>
            <p>{myData.note}</p>
            <button onClick={() => this.onRemove(myData.id)}>
              Remove MyData
            </button>
            <button onClick={() => this.onEdit(myData)}>
              Edit MyData
            </button>
          </div>
        ))}
        <h1>Main Page</h1>
      </div>
    );
  }
}
  
interface LinkStateProps {
  myDatas: MyData[];
}
interface LinkDispatchProps {
  startEditMyData: (myData: MyData) => void;
  startRemoveMyData: (id: string) => void;
  startSetMyData: (myDatas: MyData[]) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: MainPageProps
): LinkStateProps => ({
  myDatas: state.myDatas
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: MainPageProps
): LinkDispatchProps => ({
  startEditMyData: bindActionCreators(startEditMyData, dispatch),
  startRemoveMyData: bindActionCreators(startRemoveMyData, dispatch),
  startSetMyData: bindActionCreators(startSetMyData, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);