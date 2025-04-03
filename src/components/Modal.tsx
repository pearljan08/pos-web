import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react"

const Modal = ({open, handleOpen, dialogBody, dialogFooter}) => {
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple modal.</DialogHeader>
        <DialogBody>
          {dialogBody || "No content provided."}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          {dialogFooter || (<Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>)}
          
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default Modal
