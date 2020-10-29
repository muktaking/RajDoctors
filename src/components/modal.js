import React from "react"
import ReactDOM from "react-dom"

// const JSX_MODAL = (
//   <div class="modal" tabindex="-1" role="dialog">
//     <div class="modal-dialog" role="document">
//       <div class="modal-content">
//         <div class="modal-header">
//           {/* <h5 class="modal-title">Modal title</h5>
//           <button
//             type="button"
//             class="close"
//             data-dismiss="modal"
//             aria-label="Close"
//           >
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div class="modal-body">
//           <p>Modal body text goes here.</p>
//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-primary">
//             Save changes
//           </button>
//           <button type="button" class="btn btn-secondary" data-dismiss="modal">
//             Close
//           </button> */}
//           {props.children}
//         </div>
//       </div>
//     </div>
//   </div>
// )

function Modal({ show, handleClose, children }) {
  if (!show) return null
  return ReactDOM.createPortal(
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">{children}</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  )
}

export default Modal
