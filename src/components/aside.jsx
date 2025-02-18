import './aside.css'
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Aside() { 
    return (
      <aside>
        <div className="sect">
          <h2>Filters </h2>
          <Icon id="rot" icon="mage:filter" width={24} height={24} />
            </div>
            <hr />
        <ol className="filters">
          <div className="sect">
            <li className="filter">T-shirts</li>
            <Icon className="shift" icon="lucide:chevron-right" />
          </div>
          <div className="sect">
            <li className="filter">Shorts</li>
            <Icon className="shift" icon="lucide:chevron-right" />
          </div>
          <div className="sect">
            <li className="filter">Shirts</li>
            <Icon className="shift" icon="lucide:chevron-right" />
          </div>
          <div className="sect">
            <li className="filter">Hoodie</li>
            <Icon className="shift" icon="lucide:chevron-right" />
          </div>
          <div className="sect">
            <li className="filter">Jeans</li>
            <Icon className="shift" icon="lucide:chevron-right" />
          </div>
            </ol>
            <hr />
        <div className="sect">
          <h2>Price</h2>
          <Icon className="shift" icon="lucide:chevron-right" />
            </div>
            <hr />
        <div>
          <h2>Color</h2>
          <div>
            <div className=""></div>
          </div>
            </div>
            <hr />
        <div>
          <h2>Dress Style</h2>
          <ol className="filters">
            <div className="sect">
              <li className="filter">Casual</li>
              <Icon className="shift" icon="lucide:chevron-right" />
            </div>
            <div className="sect">
              <li className="filter">Formal</li>
              <Icon className="shift" icon="lucide:chevron-right" />
            </div>
            <div className="sect">
              <li className="filter">Party</li>
              <Icon className="shift" icon="lucide:chevron-right" />
            </div>
            <div className="sect">
              <li className="filter">Gym</li>
              <Icon className="shift" icon="lucide:chevron-right" />
            </div>
          </ol>
        </div>
      </aside>
    );
}