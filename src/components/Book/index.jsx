import React from 'react'
import style from "./book.module.css"
import { addBook } from "../../redux/slice/books";
import { useDispatch } from "react-redux";

function Book({props}) {
    const dispatch = useDispatch()
  return (
    <div className={style.book}>
        <img className={style.bookImg} src={props?.volumeInfo?.imageLinks?.smallThumbnail} alt={props?.volumeInfo?.title}/>
        <h5 className={style.bookName}>{props?.volumeInfo?.title}</h5>
        <h6 className={style.book__written__name}>{props?.volumeInfo?.authors}</h6>
        <br />
        <a className={style.previewBtn} href={props?.volumeInfo?.previewLink}>Preview</a>
        <a className={style.detailBtn} onClick={()=>dispatch(addBook(props))}>Detail</a>
    </div>
  )
}

export default Book