# Pinspo
## Background

Pinspo is a full-stack web clone of the popular social media site Pinterest, a platform where users can share and discover ideas by creating, saving, and organizing pins on themed boards.

Check out the [live site](https://pinspo-8e2f26124196.herokuapp.com/)

## Technologies
- React and JavaScript frontend with CSS3 styling and Redux state
- Ruby on Rails, PostgresSQL backend
- AWS for hosting pin images and Active Storage for using images in app
- Webpack to bundle and transpile the source code
- npm to manage project dependencies

## Functionality & MVPs
In Pinspo, users can:

- View Pins and Boards:
   - Browse and view pins and boards created by themselves and other users. This allows users to discover and explore a wide range of content shared on the platform.

- Create Pins and Boards:
   - Create new pins and boards, which can include images, descriptions, and links. Pins can be organized into boards, serving as collections for users to save and categorize their favorite pins.

   ![image name](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2thNWd6YWlxYTIwam9oZnN0bWliNmYwaXZ5Zmp3bm0xN3IzaDFrcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dVwrH4rXop8y7bCnRx/giphy.gif)

- Edit/Delete Pins and Boards:
   - Edit their own pins and boards, providing the flexibility to update descriptions, change images, and add or remove pins. This allows users to refine and enhance their content over time.

- Search Pins:
   - Search for specific pins using keywords, enabling users to find content that aligns with their interests. This search functionality enhances the user experience by facilitating the discovery of relevant and engaging content.

    ![image name](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGVrN3BhajRzc2EzN3RwcjAwMnlsOWNidW5sdGdrbXJkczdtem1zMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iKy3EN3kB6A5R0kU90/giphy.gif)
- Comments
   - Engage in interactive discussions by adding, editing, or deleting comments on pins. This feature enables users to interact with other users and provide feedback, opinions, or ask questions related to a pin.

   ![image name](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjA5MTQyMnBnNTR0Z3I3Y2pydnl0Z2IxaTJwZW1jcjhleGs5Yjh5MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WvRHG1vL4wffhndrMd/giphy.gif)

## Implementation Highlights

The SplashPageShow component uses the useEffect hook to handle the automatic photo transition on the Pinspo splash page. When the shouldShow prop changes, it sets up an interval that increments the currentPhoto state every 250 milliseconds. It clears the interval and resets the currentPhoto state when the component is unmounted or when the shouldShow prop changes.

<h5 a><strong><code>SplashPageShow.js</code></strong></h5>

```Javascript
const SplashPageShow = (props) => {
    const { title, photoUrls, shouldShow, shouldLeave, handleArrow } = props
    
    const [currentPhoto, setCurrentPhoto] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhoto((prevPhoto) => prevPhoto + 1)
        }, 250);

        return () => {
            setCurrentPhoto(0);
            clearInterval(interval)
        }
    }, [shouldShow])

    return (
        <div className='splash-changing-category-container'>
            <div className={`splash-prompt-container ${shouldShow ? "show-page" : shouldLeave ? "leaving-page" : "hidden-page"}`}>
                <div className={`${title.split(" ")[0]}-words`}>
                    {title}
                </div>
            </div>
        
            <div className={`splash-photo-container ${shouldShow ? "show-page" : shouldLeave ? "leaving-page" : "hidden-page"}`}>
                {
                    photoUrls.map((photoUrl, i) =>
                    <SplashPhoto photoUrl={photoUrl}
                        key={i}
                        photoId={i}
                        stationaryPhoto={false}
                        showPhoto={i < currentPhoto}
                    />
                    )
                }
            </div>
            <div onClick={handleArrow} className={`${title.split(" ")[0]}-arrow first-page-arrow splash-arrow ${shouldShow ? "show-arrow" : "hidden-arrow"}`}>
                <i className="fa-solid fa-chevron-down fa-lg"></i>
            </div>
        </div>
    )
}

```

The BoardIndex component returns JSX elements based on the current state. If loading is true, it renders a Spinner component to indicate that the data is being fetched. If there are boards and the boards array is not empty, it renders a div with a class name of boards-grid and maps over the boards array to render individual BoardView components.

<h5 a><strong><code>BoardsIndex.js</code></strong></h5>

```Javascript
function BoardIndex() {
  const userParams = useParams();
  const userId = parseInt(userParams.userId);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);
  const [boards, setBoards] = useState([]);
  const [numBoards, setNumBoards] = useState(0);
  const newBoard = useSelector(state => state.boards);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (userId) {
      dispatch(displayBoards(userId))
      .then(response => response.json())
      .then(data => {
          setBoards(data);
          setNumBoards(data.length);
          setLoading(false);
      });
    }
  }, [dispatch, userId, newBoard]);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
    .then(res => res.json())
    .then(data => setUser(data.user))
  }, [])

  return (
    <div className='boards-container'>
      {loading ? (
        <Spinner /> 
      ) : boards && boards.length > 0 ? (
        <div className='boards-grid'>
          {boards.map(board => (
            <BoardView board={board} className='board' key={board.id} />
          ))}
        </div>
      ) : (
        <div className='no-saved-pins-user'>
          <p className='no-boards-message'>
            {user?.id === currentUser?.id
              ? "You haven't saved any pins yet"
              : `${user?.username} hasn't saved any pins yet`}
          </p>
          <MoreIdeasButton/>
        </div>
      )}
    </div>
  );
}
```
