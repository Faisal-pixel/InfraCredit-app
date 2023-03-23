import styles from "./SaveCommentSection.module.css";

const SaveCommentSection = ({
  imageDimensions,
  imageDimensionIds,
  imageSizeIds,
  imageSizeIds16x16,
  imageSizeIds16x16x,
  imageSizeIds16x16x1774626,
  imageSizeIds16x16x17746262,
  imageSizeIds16x16x17746263,
}) => {
  return (
    <div className={styles.image2Parent}>
      <img className={styles.image2Icon} alt="" src={imageDimensions} />
      <div className={styles.inputParent}>
        <div className={styles.input}>
          <div className={styles.commentOptional}>Comment (Optional):</div>
          <textarea className={styles.inputField}></textarea>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.buttonParent}>
            <button className={styles.button}>
              <div className={styles.uploadedFiles}>Save Comment</div>
            </button>
            <button className={styles.button}>
              <div className={styles.uploadedFiles}>View Comments</div>
            </button>
          </div>
          <button className={styles.button4}>
            <div className={styles.uploadedFiles}>Delete Comments</div>
          </button>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <img className={styles.frameIcon} alt="" src={imageDimensionIds} />
            <div className={styles.uploadedFiles}>Uploaded files</div>
          </div>
          <div className={styles.uploadedFile3Parent}>
            <div className={styles.uploadedFile3}>
              <div className={styles.documentName1}>
                <div className={styles.documentNamepdfWrapper}>
                  <div className={styles.commentOptional}>
                    document-name.PDF
                  </div>
                </div>
              </div>
              <div className={styles.documentName2}>
                <div className={styles.documentNamepdfWrapper}>
                  <div className={styles.commentOptional}>Preview</div>
                </div>
              </div>
              <div className={styles.documentName3}>
                <div className={styles.documentNamepdfWrapper}>
                  <div className={styles.commentOptional}>5.7MB</div>
                </div>
              </div>
              <img className={styles.deleteIcon} alt="" src={imageSizeIds} />
            </div>
            <div className={styles.uploadedFile3}>
              <div className={styles.documentName1}>
                <div className={styles.documentNamepdfWrapper}>
                  <div className={styles.commentOptional}>
                    document-name.PDF
                  </div>
                </div>
              </div>
              <div className={styles.documentName2}>
                <div className={styles.documentNamepdfWrapper}>
                  <div className={styles.commentOptional}>Preview</div>
                </div>
              </div>
              <div className={styles.documentName3}>
                <div className={styles.documentNamepdfWrapper}>
                  <div className={styles.commentOptional}>5.7MB</div>
                </div>
              </div>
              <img
                className={styles.deleteIcon}
                alt=""
                src={imageSizeIds16x16}
              />
            </div>
            <div className={styles.uploadedFile3}>
              <div className={styles.documentName1}>
                <div className={styles.documentNamepdfWrapper}>
                  <div className={styles.commentOptional}>
                    document-name.PDF
                  </div>
                </div>
              </div>
              <div className={styles.documentName2}>
                <div className={styles.documentNamepdfWrapper}>
                  <div className={styles.commentOptional}>Preview</div>
                </div>
              </div>
              <div className={styles.documentName3}>
                <div className={styles.documentNamepdfWrapper}>
                  <div className={styles.commentOptional}>5.7MB</div>
                </div>
              </div>
              <img
                className={styles.deleteIcon}
                alt=""
                src={imageSizeIds16x16x}
              />
            </div>
            <div className={styles.uploadedFile3}>
              <div className={styles.documentName1}>
                <div className={styles.documentNamepdfWrapper}>
                  <div className={styles.commentOptional}>
                    document-name.PDF
                  </div>
                </div>
              </div>
              <div className={styles.documentName2}>
                <div className={styles.documentNamepdfWrapper}>
                  <div className={styles.commentOptional}>Preview</div>
                </div>
              </div>
              <div className={styles.documentName3}>
                <div className={styles.documentNamepdfWrapper}>
                  <div className={styles.commentOptional}>5.7MB</div>
                </div>
              </div>
              <img
                className={styles.deleteIcon}
                alt=""
                src={imageSizeIds16x16x1774626}
              />
            </div>
            <div className={styles.uploadedFile3}>
              <div className={styles.documentName1}>
                <div className={styles.documentNamepdfWrapper}>
                  <div className={styles.commentOptional}>
                    document-name.PDF
                  </div>
                </div>
              </div>
              <div className={styles.documentName2}>
                <div className={styles.documentNamepdfWrapper}>
                  <div className={styles.commentOptional}>Preview</div>
                </div>
              </div>
              <div className={styles.documentName3}>
                <div className={styles.documentNamepdfWrapper}>
                  <div className={styles.commentOptional}>5.7MB</div>
                </div>
              </div>
              <img
                className={styles.deleteIcon}
                alt=""
                src={imageSizeIds16x16x17746262}
              />
            </div>
            <div className={styles.uploadedFile3}>
              <div className={styles.documentName1}>
                <div className={styles.documentNamepdfWrapper}>
                  <div className={styles.commentOptional}>
                    document-name.PDF
                  </div>
                </div>
              </div>
              <div className={styles.documentName2}>
                <div className={styles.documentNamepdfWrapper}>
                  <div className={styles.commentOptional}>Preview</div>
                </div>
              </div>
              <div className={styles.documentName3}>
                <div className={styles.documentNamepdfWrapper}>
                  <div className={styles.commentOptional}>5.7MB</div>
                </div>
              </div>
              <img
                className={styles.deleteIcon}
                alt=""
                src={imageSizeIds16x16x17746263}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveCommentSection;
