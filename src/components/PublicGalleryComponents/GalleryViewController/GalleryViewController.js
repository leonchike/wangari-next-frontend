import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

// Component imports
import GalleryView from "@/components/PublicGalleryComponents/GalleryView";

const GalleryViewController = ({ id, collectionId, assetArray, assetData }) => {
  const router = useRouter();

  // use id to find current position in assetArray
  const assetIndex = assetArray.indexOf(id);
  // use assetIndex to find previous and next asset ids
  const previousAssetId = assetArray[assetIndex - 1];
  const nextAssetId = assetArray[assetIndex + 1];
  // navigate to previous and next asset ids
  const previousAssetUrl = `/art/gallery/${previousAssetId}`;
  const nextAssetUrl = `/art/gallery/${nextAssetId}`;
  // Collection url
  const collectionUrl = `/art/collections/${collectionId}`;

  // useEffect to add window keydown event listener and clean up function
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          if (previousAssetId) {
            router.push(previousAssetUrl);
          }
          break;
        case "ArrowRight":
          if (nextAssetId) {
            router.push(nextAssetUrl);
          }
          break;
        case "Escape":
          router.push(collectionUrl);
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // event handlers for navigation
  const handlePreviousNav = () => {
    router.push(previousAssetUrl);
  };
  const handleNextNav = () => {
    router.push(nextAssetUrl);
  };
  const handleBackToCollection = () => {
    document
      .getElementById("GalleryLeftButton")
      .removeEventListener("click", () => {
        handlePreviousNav();
      });

    document
      .getElementById("GalleryRightButton")
      .removeEventListener("click", () => {
        handleNextNav();
      });

    document
      .getElementById("GalleryBackButton")
      .removeEventListener("click", () => {
        handleBackToCollection();
      });
    router.push(collectionUrl);
  };

  // useEffect to add event listeners to buttons on the Gallery Layout Component ** Note function to remove event listeners is not working and has been transfered to handleBackToCollection function
  useEffect(() => {
    document
      .getElementById("GalleryLeftButton")
      .addEventListener("click", () => {
        handlePreviousNav();
      });

    document
      .getElementById("GalleryRightButton")
      .addEventListener("click", () => {
        handleNextNav();
      });

    document
      .getElementById("GalleryBackButton")
      .addEventListener("click", () => {
        handleBackToCollection();
      });

    // Clean up function to remove event listeners
    return () => {};
  }, [id]);

  // useEffect to hide buttons when there is no previous or next asset
  useEffect(() => {
    if (!previousAssetId) {
      document.getElementById("GalleryLeftButton").style.display = "none";
    } else {
      document.getElementById("GalleryLeftButton").style.display = "block";
    }
    if (!nextAssetId) {
      document.getElementById("GalleryRightButton").style.display = "none";
    } else {
      document.getElementById("GalleryRightButton").style.display = "block";
    }
  }, [id]);

  return <GalleryView id={id} assetData={assetData} />;
};

export default GalleryViewController;
