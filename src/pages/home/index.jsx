import React, { Fragment, useEffect, useState } from "react";
import Book from "../../components/Book";
import styles from "./style.module.css";
import { getBooks } from "../../service/getBooks";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { closeBook } from "../../redux/slice/books";

function Home() {
  const [books, setBooks] = useState([]);
  const [inpVal, setInpVal] = useState("");
  const { book } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("inp vallar", inpVal);
    if (inpVal !== "") {
      getBooks(inpVal.toLowerCase()).then((res) => {
        if (res.status === 200) {
          console.log(res.data.itemn);
          setBooks(res.data.items);
        }
      });
    } else {
      setBooks([]);
    }
  }, [inpVal]);

  const ModalPanel = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000;
  `;
  const Detail = styled.div`
    transform: translate(-50%, -50%);
    transition: all 0.5s;
    width: 40%;
    z-index: 1000;
    box-shadow: 0 50px 100px -20px rgb(50 50 93 / 25%),
      0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%);
    left: 50%;
    padding: 50px 25px;
    position: fixed;
    background-color: #fff;
  `;
  const DetailImg = styled.img`
    width: 25%;
    height: 200px;
    margin-left: auto;
    object-fit: contain;
    float: left;
    margin-right: auto;
  `;
  const DetailBody = styled.div`
    width: 70%;
    float: left;
    margin: 10px 0px;
    box-sizing: border-box;
    padding: 5px 15px;
  `;
  const DetailTitle = styled.h4`
    padding: 10px 15px;
    text-align: center;
    margin: 0px;
  `;
  const DetailTime = styled.p`
    text-align: center;
    margin-bottom: 10px;
    color: rgb(120, 120, 120);
    margin-top: -5px;
  `;
  const DetailWritterName = styled.h5`
    margin: 2px;
    display: inline-block;
    background-color: rgba(220, 220, 220, 0.4);
    padding: 6px;
    border-radius: 20px;
    color: black;
  `;
  const DetailDescription = styled.p`
    overflow: auto;
    word-spacing: 1px;
    letter-spacing: 0.2px;
    line-height: 22px;
    font-size: 14px;
    max-height: 400px;
  `;

  return (
    <Fragment>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <h1 className={styles.title}>Dada Book Searching App</h1>
          <div className={styles.search}>
            <form
              onSubmit={(e) => {
                setInpVal(e.target.children[0].value);
                e.preventDefault();
              }}
            >
              <input type="text" placeholder="Find book" />
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="sc-dJjYzT kBkKjn"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                onClick={(e) =>
                  setInpVal(e.target.parentElement?.children[0]?.value)
                }
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              </svg>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        {book.detail ? (
          <Fragment>
            <ModalPanel></ModalPanel>
            <Detail>
              <DetailImg
                src={book?.book.volumeInfo?.imageLinks?.smallThumbnail}
              />
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className={styles.closeBtn}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => dispatch(closeBook())}
              >
                <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
                <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
              </svg>
              <DetailBody>
                <DetailTitle>{book.book?.volumeInfo?.title}</DetailTitle>
                <DetailTime>{book.book.volumeInfo.publishedDate}</DetailTime>
                <DetailWritterName>
                  {book.book?.volumeInfo?.authors}
                </DetailWritterName>
                <DetailDescription>
                  {book.book.volumeInfo.description}
                </DetailDescription>
              </DetailBody>
            </Detail>
          </Fragment>
        ) : (
          ""
        )}

        {books?.length <= 0 || books == undefined ? (
          <div className={styles.body__container}>
            <div>
              Nothing
              <br />
              To
              <br />
              Show!?
              <br />
            </div>
          </div>
        ) : (
          books?.map((book, index) => {
            return <Book key={index} props={book} />;
          })
        )}
      </div>
    </Fragment>
  );
}

export default Home;
