import { ComponentPropsWithoutRef } from "react";

type LogoProps = {
  width?: number;
  height?: number;
} & ComponentPropsWithoutRef<"svg">;

export const Logo = ({ width = 48, height = 48, ...props }: LogoProps) => (
  <svg
    width={width}
    height={height}
    {...props}
    viewBox="0 0 193 148"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M54.75 114.75C53.5 114.917 52.2917 115.125 51.125 115.375C50.0417 115.625 48.9167 115.917 47.75 116.25C47.25 116.417 46.75 116.542 46.25 116.625C45.75 116.708 45.2083 116.833 44.625 117C43.125 116.667 41.6667 116.417 40.25 116.25C38.9167 116.083 37.7083 116 36.625 116L34.75 115.5C33.75 115.167 33 114.917 32.5 114.75C32 114.5 31.5 114.333 31 114.25C30.5833 114.083 30.0417 113.958 29.375 113.875C28.7917 113.792 27.9167 113.667 26.75 113.5C25.3333 114.083 23.9583 114.375 22.625 114.375C21.7083 114.375 20.75 114.25 19.75 114C18.75 113.667 17.75 113.083 16.75 112.25C15.75 111.333 14.7917 110.125 13.875 108.625C12.9583 107.042 12.1667 105.042 11.5 102.625C11.75 100.708 12.0417 99.0417 12.375 97.625C12.7083 96.2083 13.0417 95.0833 13.375 94.25L14.375 93.125C15.875 92.5417 17.5833 92.25 19.5 92.25C21.3333 92.25 23.125 92.5417 24.875 93.125C26.625 93.7083 28.375 94.3333 30.125 95C30.875 95.3333 31.4167 95.5833 31.75 95.75C32.0833 95.9167 32.3333 96.0417 32.5 96.125C32.6667 96.2083 32.875 96.25 33.125 96.25C33.4583 96.25 34 96.25 34.75 96.25C35.1667 96.25 35.5417 96.25 35.875 96.25C36.2917 96.1667 36.7083 96.0833 37.125 96L38.625 96.125C39.2083 96.4583 39.9167 96.625 40.75 96.625C41.3333 96.625 41.9167 96.5417 42.5 96.375C43.1667 96.2083 43.8333 96.0417 44.5 95.875C45.1667 95.625 45.75 95.4583 46.25 95.375C46.75 95.2917 47.2083 95.1667 47.625 95L48.875 93.875C49.7083 93.5417 50.3333 93.1667 50.75 92.75C51.25 92.3333 51.6667 91.875 52 91.375C52.3333 90.7917 52.625 90.2083 52.875 89.625C53.2083 89.0417 53.625 88.4167 54.125 87.75C54.5417 87.25 54.9167 86.75 55.25 86.25C55.6667 85.75 56.0833 85.2917 56.5 84.875V83.625C57.8333 80.5417 59 77.4167 60 74.25C61 71.0833 61.875 67.9167 62.625 64.75C63.375 61.5833 64 58.5 64.5 55.5C65.0833 52.5 65.5833 49.7917 66 47.375C65.75 47.375 65.5 47.375 65.25 47.375C65 47.2917 64.7917 47.25 64.625 47.25C62.125 47.25 60.0833 47.2917 58.5 47.375C56.9167 47.4583 55.4583 47.5833 54.125 47.75C52.7917 47.9167 51.375 48.1667 49.875 48.5C48.4583 48.75 46.625 49.0833 44.375 49.5L42.25 49.875C40.6667 50.625 39.125 51.3333 37.625 52C36.2083 52.5833 34.7083 52.875 33.125 52.875C30.625 52.875 28.4583 51.875 26.625 49.875C24.7083 48.7083 23.625 47.0417 23.375 44.875C22.9583 44.125 22.7917 43.4167 22.875 42.75C22.5417 41.5833 22.3333 40.5417 22.25 39.625C22.25 38.625 22.25 37.7083 22.25 36.875L22.375 34.75H24.25C24.75 34.25 25.0833 33.875 25.25 33.625C25.5 33.375 25.6667 33.0833 25.75 32.75L26.125 31.5L27.375 31.375C29.125 31.125 30.9167 30.8333 32.75 30.5C34.5833 30.1667 36.4583 29.7917 38.375 29.375C40.2917 29.0417 41.9167 28.75 43.25 28.5C44.6667 28.25 46 28.0833 47.25 28C48.5 27.8333 49.7917 27.75 51.125 27.75C52.4583 27.6667 54 27.625 55.75 27.625C56.4167 27.625 57 27.6667 57.5 27.75C58.0833 27.75 58.6667 27.75 59.25 27.75C59.5833 27.3333 59.9167 27.0833 60.25 27C60.5833 26.9167 60.8333 26.875 61 26.875C61.5833 26.9583 62 27.0417 62.25 27.125C62.5833 27.2083 62.8333 27.2917 63 27.375C65.8333 26.875 68.4167 26.5833 70.75 26.5C73.1667 26.3333 75.3333 26.25 77.25 26.25C78.1667 26.25 79.0833 26.25 80 26.25C80.9167 26.25 81.7917 26.2917 82.625 26.375H90.75C91.1667 26.2917 91.5417 26.25 91.875 26.25C92.2917 26.25 92.7083 26.25 93.125 26.25C93.9583 26.25 94.5833 26.25 95 26.25C95.5 26.25 95.9167 26.2917 96.25 26.375C96.5833 26.375 96.9167 26.4167 97.25 26.5C97.5833 26.5 98.0417 26.5417 98.625 26.625C100.042 26.875 101.333 27.0833 102.5 27.25C103.667 27.4167 104.833 27.5 106 27.5L108.375 27.375L108.75 28.875L109.875 30.5C110.125 31 110.458 31.4583 110.875 31.875C111.292 32.2917 111.75 32.7083 112.25 33.125C113.25 34.0417 114.208 35.2083 115.125 36.625C116.125 37.9583 116.5 39.9167 116.25 42.5L115.125 44C114.792 44.1667 114.458 44.375 114.125 44.625C113.875 44.875 113.583 45.1667 113.25 45.5L112 46.625C110.917 46.7083 110 46.7917 109.25 46.875C108.5 46.875 107.667 46.875 106.75 46.875C105.25 46.875 103.708 46.8333 102.125 46.75C100.625 46.6667 99.0417 46.5833 97.375 46.5C96.4583 46.4167 95.75 46.375 95.25 46.375C94.75 46.375 94.2917 46.375 93.875 46.375C93.4583 46.375 92.9583 46.4167 92.375 46.5C91.875 46.5 91.2083 46.5 90.375 46.5C89.5417 46.5 88.9167 46.5 88.5 46.5C88.1667 46.5 87.6667 46.5417 87 46.625C86.8333 49.2917 86.5 51.625 86 53.625C85.5833 55.5417 85.0417 57.5833 84.375 59.75C82.7917 67.9167 80.8333 75.625 78.5 82.875C76.25 90.125 73.7083 96.6667 70.875 102.5C68.2083 105.333 65.6667 107.875 63.25 110.125C60.8333 112.292 58.125 113.833 55.125 114.75H54.75Z"
      fill="#475569"
      className="fill-slate-600 transition-colors delay-150 duration-300 ease-out dark:fill-slate-200"
    />
    <path
      d="M97.75 134.25C99.6667 134.417 101.042 134.708 101.875 135.125C102.792 135.542 103.417 136.083 103.75 136.75C104.083 137.333 104.208 138 104.125 138.75C104.042 139.5 104 140.25 104 141C101.833 141.917 99.0833 142.625 95.75 143.125C92.5 143.625 88.9167 144 85 144.25C81.0833 144.5 77 144.625 72.75 144.625C68.5 144.708 64.375 144.75 60.375 144.75C56.375 144.75 52.6667 144.75 49.25 144.75C45.8333 144.75 43 144.792 40.75 144.875C33.8333 145.292 28.4583 145.708 24.625 146.125C20.7917 146.542 18.1667 146.958 16.75 147.375C14.25 147.292 12.2917 147 10.875 146.5C9.375 146 8.16667 145.375 7.25 144.625C6.33333 143.875 5.54167 143.042 4.875 142.125C4.20833 141.125 3.41667 140.125 2.5 139.125C3 138.458 3.125 137.5 2.875 136.25C2.54167 135 1.75 134.083 0.5 133.5C1.5 133.333 2.25 132.833 2.75 132C3.25 131.167 3.29167 130.542 2.875 130.125C4.95833 129.792 7.20833 129.583 9.625 129.5C11.9583 129.417 14.2917 129.375 16.625 129.375C18.9583 129.292 21.1667 129.167 23.25 129C25.3333 128.75 27.1667 128.375 28.75 127.875C35.1667 127.875 41.875 127.875 48.875 127.875C55.875 127.792 62.4167 127.667 68.5 127.5C70.6667 127.917 73.2083 128.167 76.125 128.25C79.125 128.333 82.0417 128.542 84.875 128.875C87.7917 129.125 90.4167 129.625 92.75 130.375C95.1667 131.125 96.8333 132.417 97.75 134.25Z"
      fill="#10B981"
    />
    <path
      d="M88 88.75C87.3333 88.0833 86.8333 87.2917 86.5 86.375C86.25 85.4583 85.5833 84.7083 84.5 84.125C84.3333 82.875 84.0833 81.4583 83.75 79.875C83.5 78.2083 83.2083 76.5417 82.875 74.875C82.625 73.125 82.4167 71.4167 82.25 69.75C82.1667 68 82.25 66.4167 82.5 65C82.6667 64.25 82.9167 63.5417 83.25 62.875C83.6667 62.2083 84.0417 61.5833 84.375 61C84.7917 60.3333 85.0833 59.6667 85.25 59C85.5 58.3333 85.5417 57.6667 85.375 57C85.875 56.9167 86.1667 56.6667 86.25 56.25C86.4167 55.75 86.8333 55.5833 87.5 55.75C88.0833 53.9167 88.7083 52.2083 89.375 50.625C90.0417 49.0417 90.75 47.5 91.5 46C92.25 44.5 93 43 93.75 41.5C94.5833 39.9167 95.3333 38.1667 96 36.25C94.5833 34.9167 93.5417 33.5 92.875 32C92.2917 30.4167 91.8333 28.8333 91.5 27.25C91.1667 25.6667 90.9167 24.0833 90.75 22.5C90.5833 20.8333 90.25 19.1667 89.75 17.5C90.75 16 91.9583 14.7917 93.375 13.875C94.7917 12.875 96.3333 12.0833 98 11.5C99.75 10.8333 101.625 10.3333 103.625 10C105.625 9.58333 107.75 9.125 110 8.625C114 7.375 117.583 6.41667 120.75 5.75C123.917 5 127 4.41667 130 4C133 3.5 136.125 3.08333 139.375 2.75C142.625 2.33333 146.375 1.75 150.625 1C150.708 1.25 150.833 1.375 151 1.375C151.25 1.375 151.542 1.375 151.875 1.375C152.125 1.95833 152.583 2.25 153.25 2.25C153.25 2 153.208 1.79167 153.125 1.625C153.125 1.375 153.125 1.16667 153.125 1C153.292 1 153.5 1.04167 153.75 1.125C154.083 1.20833 154.333 1.29167 154.5 1.375C154.75 1.45833 154.958 1.45833 155.125 1.375C155.292 1.20833 155.333 0.916667 155.25 0.5C156.25 2.25 157.542 3.70833 159.125 4.875C160.708 5.95833 162.458 6.91667 164.375 7.75C164.458 8.5 164.458 9.04167 164.375 9.375C164.375 9.70833 164.333 10.0417 164.25 10.375C164.167 10.625 164.125 10.9583 164.125 11.375C164.125 11.7083 164.208 12.2083 164.375 12.875C163.042 15.125 161.5 16.875 159.75 18.125C158.083 19.375 156.292 20.3333 154.375 21C152.458 21.6667 150.417 22.1667 148.25 22.5C146.167 22.8333 144 23.2083 141.75 23.625C139.583 23.9583 137.375 24.4583 135.125 25.125C132.875 25.7917 130.667 26.7917 128.5 28.125C127.833 27.875 127.208 27.7917 126.625 27.875C126.125 27.875 125.583 27.9583 125 28.125C124.417 28.2917 123.75 28.4583 123 28.625C122.333 28.7917 121.5 28.7917 120.5 28.625C119.833 29.2083 119.042 29.625 118.125 29.875C117.292 30.125 116.417 30.375 115.5 30.625C115.917 31.5417 116.083 32.4583 116 33.375C116 34.2917 116.125 35.0833 116.375 35.75C119.875 36.0833 123.75 36.0833 128 35.75C132.25 35.3333 136.417 35.0417 140.5 34.875C140.583 35.2917 140.542 35.5833 140.375 35.75C140.208 35.9167 140.125 36.2083 140.125 36.625C140.875 37.125 141.583 37.75 142.25 38.5C142.917 39.25 143.583 40 144.25 40.75C145 41.4167 145.75 42 146.5 42.5C147.25 42.9167 148.125 43.0833 149.125 43C149.542 43.8333 149.833 44.7083 150 45.625C150.167 46.5417 150.042 47.5 149.625 48.5C147.958 49.5833 146.333 50.7083 144.75 51.875C143.167 52.9583 141.5 53.9583 139.75 54.875C138.083 55.7917 136.25 56.5417 134.25 57.125C132.25 57.7083 130.083 57.9583 127.75 57.875C127.333 57.875 126.958 57.875 126.625 57.875C126.375 57.875 126.042 57.7083 125.625 57.375C124.792 57.7917 123.667 57.9583 122.25 57.875C120.917 57.7083 119.792 57.8333 118.875 58.25C117.708 57.8333 116.333 57.625 114.75 57.625C113.25 57.625 111.917 57.4167 110.75 57C109.25 59.1667 107.833 61.4583 106.5 63.875C105.167 66.2083 104 68.7083 103 71.375C106.417 71.875 109.25 72.0833 111.5 72C113.75 71.9167 115.875 71.75 117.875 71.5C119.875 71.25 121.917 71 124 70.75C126.167 70.5 128.792 70.4167 131.875 70.5C133.958 69.5 136.333 68.8333 139 68.5C141.75 68.0833 144.292 67.5 146.625 66.75C147.458 67 148.167 67.5 148.75 68.25C149.333 68.9167 149.875 69.625 150.375 70.375C150.958 71.0417 151.542 71.625 152.125 72.125C152.708 72.625 153.458 72.7917 154.375 72.625C154.792 73.0417 155.042 73.5417 155.125 74.125C155.292 74.7083 155.417 75.25 155.5 75.75C155.667 76.25 155.875 76.6667 156.125 77C156.375 77.25 156.833 77.3333 157.5 77.25C155.917 80.5 154.125 83 152.125 84.75C150.208 86.5 148 87.875 145.5 88.875C143.083 89.7917 140.333 90.5 137.25 91C134.25 91.4167 130.875 91.9583 127.125 92.625C126.208 92.7917 125.417 92.7917 124.75 92.625C124.167 92.375 123.542 92.25 122.875 92.25C120.542 92.6667 117.75 93.0833 114.5 93.5C111.333 93.9167 108.125 94.0833 104.875 94C101.625 93.9167 98.5 93.5 95.5 92.75C92.5 92 90 90.6667 88 88.75Z"
      fill="#475569"
      className="fill-slate-600 transition-colors delay-150 duration-300 ease-out dark:fill-slate-200"
    />
    <path
      d="M112.625 107.75C112.708 107.417 112.875 107.292 113.125 107.375C113.458 107.375 113.75 107.333 114 107.25C113.333 106.583 112.917 105.708 112.75 104.625C112.583 103.458 112.167 102.5 111.5 101.75C111.667 101.333 111.792 100.917 111.875 100.5C112.042 100.083 112.417 99.9167 113 100C112.75 98.1667 112.792 96.4583 113.125 94.875C113.458 93.2917 113.958 91.7917 114.625 90.375C115.375 88.9583 116.208 87.5833 117.125 86.25C118.125 84.8333 119.083 83.4167 120 82C120.75 81.8333 121.208 81.9167 121.375 82.25C121.542 82.5 121.833 82.4167 122.25 82C123.583 81.0833 124.5 80.0833 125 79C125.5 77.8333 125.75 76.5833 125.75 75.25C126.5 73.0833 127.333 70.9583 128.25 68.875C129.25 66.7083 130.375 64.7083 131.625 62.875C132.875 61.0417 134.208 59.4583 135.625 58.125C137.042 56.7083 138.583 55.625 140.25 54.875C141.417 53.875 142.875 52.9583 144.625 52.125C146.458 51.2917 148.375 50.6667 150.375 50.25C152.458 49.75 154.583 49.5 156.75 49.5C158.917 49.4167 160.917 49.625 162.75 50.125C163.167 50.2917 163.417 50.2083 163.5 49.875C163.583 49.4583 163.792 49.25 164.125 49.25C168.292 49.75 172 50.5833 175.25 51.75C178.583 52.9167 181.417 54.5417 183.75 56.625C185.333 59.125 186.833 61.8333 188.25 64.75C189.667 67.5833 190.75 70.5833 191.5 73.75C192.333 76.8333 192.708 80.0417 192.625 83.375C192.542 86.7083 191.833 90.0417 190.5 93.375C187.583 97.0417 184.042 100 179.875 102.25C175.708 104.417 171.208 106.25 166.375 107.75C161.625 109.167 156.667 110.333 151.5 111.25C146.417 112.167 141.458 113.167 136.625 114.25C136.708 116.5 136.708 118.917 136.625 121.5C136.542 124 136.25 126.542 135.75 129.125C135.333 131.625 134.667 134.083 133.75 136.5C132.917 138.917 131.75 141.167 130.25 143.25C128.583 143.167 126.833 143.333 125 143.75C123.25 144.167 121.667 144.583 120.25 145C119.583 144.583 118.917 144.167 118.25 143.75C117.667 143.417 116.917 143.208 116 143.125C116.25 142.125 116 141.083 115.25 140C114.583 138.917 113.875 137.875 113.125 136.875C112.458 135.792 112 134.75 111.75 133.75C111.583 132.667 112.083 131.708 113.25 130.875C112.583 130.292 112.25 129.375 112.25 128.125C112.583 128.458 113 128.625 113.5 128.625C113.333 127.125 113.5 125.333 114 123.25C114.583 121.167 115.042 119.125 115.375 117.125C115.792 115.042 115.875 113.167 115.625 111.5C115.375 109.75 114.375 108.5 112.625 107.75ZM145.125 78.5C144.792 79.4167 144.5 80.25 144.25 81C144.083 81.6667 143.875 82.2917 143.625 82.875C143.375 83.4583 143.083 84.0417 142.75 84.625C142.5 85.2083 142.208 85.875 141.875 86.625C142.042 87.125 142.375 87.5 142.875 87.75C143.375 88 143.708 88.375 143.875 88.875C145.042 88.2917 146.208 87.875 147.375 87.625C148.542 87.2917 149.708 87.0417 150.875 86.875C152.042 86.7083 153.208 86.5 154.375 86.25C155.542 86 156.75 85.5833 158 85C159.25 84.4167 160.542 83.9583 161.875 83.625C163.292 83.2083 164.667 82.7917 166 82.375C167.333 81.9583 168.625 81.5 169.875 81C171.125 80.4167 172.208 79.6667 173.125 78.75C171.958 77.6667 170.208 76.7083 167.875 75.875C165.542 75.0417 163 74.5417 160.25 74.375C157.583 74.125 154.875 74.2917 152.125 74.875C149.458 75.4583 147.125 76.6667 145.125 78.5Z"
      fill="#475569"
      className="fill-slate-600 transition-colors delay-150 duration-300 ease-out dark:fill-slate-200"
    />
  </svg>
);