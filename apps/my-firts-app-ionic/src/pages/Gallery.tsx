import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
  IonAlert,
} from "@ionic/react";
import { UserPhoto, usePhotoGallery } from "../hooks/usePhotoGallery";
import './Gallery.css'

const Gallery: React.FC = () => {
  const { deletePhoto, photos } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
  const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      Swipe down to sync latest photos
      
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonGrid>
          <IonRow>

          </IonRow>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="3" key={index}>
                <IonImg
                  onClick={() => setPhotoToDelete(photo)}
                  src={photo.webviewPath}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonAlert
          header="Delete photo"
          className="custom-alert"
          subHeader="Are you sure?"
          message='This action can not be undone'
          isOpen={!!photoToDelete}
          buttons={[
            {
              text: "Yes",
              cssClass: 'alert-button-confirm',
              role: "destructive",
              handler: () => {
                if (photoToDelete) {
                  deletePhoto(photoToDelete);
                  setPhotoToDelete(undefined);
                }
              },
            },
            {
              text: "No",
              cssClass: 'alert-button-cancel',
              role: "cancel",
            },
          ]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Gallery;
