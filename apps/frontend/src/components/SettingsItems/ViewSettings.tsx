'use client';

import { useState } from 'react';
import ToggleSwitch from '../ToggleSwitch';

interface SettingsItem {
    name: string;
    key: keyof SettingsState;
}

interface SettingsState {
    arabic: boolean;
    translation: boolean;
    transliteration: boolean;
    reference: boolean;
}

const settingsItem: SettingsItem[] = [
    { name: 'Show Arabic', key: 'arabic' },
    { name: 'Show Translation', key: 'translation' },
    { name: 'Show Transliteration', key: 'transliteration' },
    { name: 'Show Reference', key: 'reference' },
];

const ViewSettings = () => {
    const [settings, setSettings] = useState<SettingsState>({
        arabic: false,
        translation: false,
        transliteration: false,
        reference: false,
    });

    return (
        <div className="flex flex-col gap-3 items-start w-full">
            {settingsItem.map((item, index) => (
                <div
                    key={index}
                    className="flex w-full justify-between items-center"
                >
                    <span className="text-sm">{item.name}</span>
                    <ToggleSwitch
                        isChecked={settings[item.key]}
                        setIsChecked={(val) =>
                            setSettings((prev) => ({ ...prev, [item.key]: val }))
                        }
                    />
                </div>
            ))}
        </div>
    );
};

export default ViewSettings;
