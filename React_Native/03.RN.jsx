// infinite scroll

const [data, setData] = useState([]);
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(false);

const loadMoreData = async () => {
  if (loading) return;
  setLoading(true);
  try {
    const response = await fetch(`https://api.example.com/data?page=${page}`);
    const json = await response.json();
    setData((prev) => [...prev, ...json]);
    setPage((prev) => prev + 1);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  loadMoreData();
}, []);

return (
  <FlatList
    data={data}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => <Text>{item.title}</Text>}
    onEndReached={loadMoreData}
    onEndReachedThreshold={0.5}
    ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
  />
);



// Dimensions 

const { width, height } = Dimensions.get("window");
const screen = Dimensions.get("screen");
const window = Dimensions.get("window");

const { width: screenWidth, height: screenHeight, scale: screenScale, fontScale: screenFontScale } = screen;
const { width: windowWidth, height: windowHeight, scale: windowScale, fontScale: windowFontScale } = window;
