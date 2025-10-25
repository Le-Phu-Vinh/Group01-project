import logo from './logo.svg';
import './App.css';

function App() {

  // State này dùng để kích hoạt việc tải lại dữ liệu trong UserList
  const [refreshKey, setRefreshKey] = useState(0);
  // Hàm này được truyền xuống AddUser, và được gọi khi thêm user thành công
  const handleUserAdded = () => {
    // Tăng giá trị key để buộc UserList component phải gọi lại useEffect
    setRefreshKey(prevKey => prevKey + 1);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Component thêm User, truyền hàm callback */}
        <AddUser onUserAdded={handleUserAdded} />
      
        <hr style={{ margin: '30px 0' }} />
      
        {/* Component hiển thị danh sách User, truyền key để kích hoạt refresh */}
        <UserList refresh={refreshKey} />
      </header>
    </div>
  );
}

export default App;
