import os
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout
from tensorflow.keras.callbacks import ModelCheckpoint

def train_model():
    # Load the data from local directory
    X_train = np.load(os.path.join('/opt/ml/input/data/training', 'X_train.npy'))
    y_train = np.load(os.path.join('/opt/ml/input/data/training', 'y_train.npy'))

    # Define the LSTM model
    model = Sequential([
        LSTM(units=50, return_sequences=True, input_shape=(X_train.shape[1], 1)),
        Dropout(0.2),
        LSTM(units=50, return_sequences=False),
        Dropout(0.2),
        Dense(units=1)
    ])

    model.compile(optimizer='adam', loss='mean_squared_error')

    # Save the model during training
    checkpoint_path = '/opt/ml/model/checkpoint.ckpt'
    checkpoint = ModelCheckpoint(checkpoint_path, save_best_only=True, verbose=1)

    # Train the model
    model.fit(X_train, y_train, epochs=50, batch_size=32, callbacks=[checkpoint])

    # Save the model in TensorFlow SavedModel format
    saved_model_dir = '/opt/ml/model/1'
    model.save(saved_model_dir, save_format='tf')
    print(f"Model saved to {saved_model_dir}")

if __name__ == "__main__":
    train_model()
