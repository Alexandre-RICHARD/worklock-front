// =============================================================================
// ? Components
import App from "@components/App";

export {App};

// =============================================================================

// ? Functions middlewares

// =============================================================================

// ? Store and slice
import {setupStore} from "@store/store";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {counterActions, counterState} from "@slices/counterSlice";
import {renderWithProviders} from "@tests/wrapperProvider";

export {
    counterActions,
    counterState,
    renderWithProviders,
    setupStore,
    useAppDispatch,
    useAppSelector
};

// =============================================================================

// ? Types and interfaces
import type {
    AppDispatch, AppStore, RootState
} from "@store/store";

export {
    AppDispatch, AppStore, RootState
};

// =============================================================================
