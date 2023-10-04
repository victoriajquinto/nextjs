import styles from './style.module.css'

const DocsIdPage = ({ params }) => {
  console.log(params)
  return (
    <div className={styles.title}>docs</div>
  )
}

export default DocsIdPage